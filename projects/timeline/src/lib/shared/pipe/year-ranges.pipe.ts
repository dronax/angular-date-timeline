import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearRanges',
  standalone: true
})
export class YearRangesPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value)
    return Math.floor(value / 10) * 10;
  }

}
