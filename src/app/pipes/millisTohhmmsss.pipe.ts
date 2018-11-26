import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'millisTohhmmsss'})
export class MillisTohhmmsss implements PipeTransform {
  transform(input: number): any {
    if (input != null) {
      let minutes = Math.floor(input / 60000);
      let seconds = ((input % 60000) / 1000).toFixed(0);
      return (minutes != 0) ? minutes + ' minute(s) and ' + seconds + ' seconds' : seconds + ' seconds';
    }
  }
}
