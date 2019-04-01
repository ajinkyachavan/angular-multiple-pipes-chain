import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') public input: ElementRef;
  newArr = [];
  isInputEmpty: boolean = false;
  highlightColor: string = 'red';
  numberOfClicks: number = 3;

  constructor(
    public searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.numberOfClicks$.subscribe(
      x => {
        this.highlightColor = this.highlightColor === 'red' ? 'blue' : 'red';
      }
    );

    // this.checkIfInputEmpty();
    let input$ = fromEvent(this.input.nativeElement, 'keyup');
    input$.pipe(
      pluck('key'),
      // filter((char: any) => char.match(/^[a-zA-Z]$/)),
      // buffer(input$.pipe(debounceTime(500))),
      // scan((curr, acc) => curr.concat(acc)),
      debounceTime(400),
    ).subscribe()
  }

  checkIfInputEmpty() {
    if (this.input.nativeElement.value === '') {
      this.isInputEmpty = true;
      this.highlightColor = 'red';
    } else {
      this.isInputEmpty = false;
      this.highlightColor = 'blue';
    }
  }

  byEmail(a, b) {
    return a.email > b.email ? 1 : -1
  }

}