import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(ary: any, args?): any {
    console.log(args)
    if (ary) {
      return ary.sort(args)
    }
    return null;
  }

}
