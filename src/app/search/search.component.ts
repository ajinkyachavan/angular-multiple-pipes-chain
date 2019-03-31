import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, of, Observable } from 'rxjs';
import { debounceTime, switchMap, pluck } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') input: ElementRef;
  myArray = ['hi', 'ho', 'hoq', 'how', 'hey', 'happy', 'halloween', 'harry', 'howl'];
  newArr = [];
  selectedValue: string;
  isInputEmpty: boolean = false;
  commentsArr = [];

  comments$: Observable<any>;

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.comments$ = this.searchService.getCommentsFromJSONPlaceholder();
    this.isInputEmpty = this.input.nativeElement.value === '';
    let input$ = fromEvent(this.input.nativeElement, 'keyup');
    input$.pipe(
      pluck('key'),
      // filter((char: any) => char.match(/^[a-zA-Z]$/)),
      // buffer(input$.pipe(debounceTime(500))),
      // scan((curr, acc) => curr.concat(acc)),
      debounceTime(400),
      switchMap(x => {
        this.isInputEmpty = this.input.nativeElement.value === '';

        this.comments$.subscribe(y => { 
          this.newArr = y.filter(el => el.email.match(this.input.nativeElement.value))
        });
        return of(true);
      })
    ).subscribe()
  }

  byEmail(a, b) {
    return a.email > b.email ? 1 : -1
  }

}