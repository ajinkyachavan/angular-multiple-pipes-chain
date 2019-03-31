import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(ary: any, fn: Function = (a, b) => a > b ? 1 : -1): any {
    if (ary) {
      return ary.sort(fn)
    }
    return null;
  }

}
