import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asyncObsFilter'
})
export class AsyncObsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {      
      return value.filter(el => el.email.match(args));
    }
    return null;
  }

}
