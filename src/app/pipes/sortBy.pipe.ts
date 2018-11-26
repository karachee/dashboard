import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sortBy'})
export class SortByPipe implements PipeTransform {
  transform(arr: any[], arg: string): any {
    let reverse: boolean = (arg) ? arg.startsWith("-") : false;
    arg = (arg) ? arg.replace("-", "") : arg;

    let sortedArr = (arr && arg) ? arr.sort((a, b) => {
      let normalizedA = (a[arg] != null) ? a[arg] : "";
      let normalizedB = (b[arg] != null) ? b[arg] : "";
      return (normalizedA < normalizedB) ? -1 : (normalizedA > normalizedB) ? 1 : 0;
    }) : arr;

    return (reverse == true) ? sortedArr.reverse() : sortedArr;
  }
}
