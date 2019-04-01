import { Directive, Input, HostListener, SimpleChanges, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputDirective]'
})
export class InputDirectiveDirective implements OnChanges {

  @Input() highlightColor: string;

  @HostBinding('style.border') border;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.highlightColor.currentValue) {
      this.border = `2px solid  ${changes.highlightColor.currentValue}`;
    }
  }

}
