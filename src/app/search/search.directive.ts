import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { SearchService } from './search.service';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnInit, OnChanges {

  @Input() numberOfClicks;

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log("number of clicks:", this.numberOfClicks);
    this.searchService.setNumberOfClicks(this.numberOfClicks++);
  }

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.input) {
      console.log('input changed '+this.numberOfClicks);
    }
  }
}
