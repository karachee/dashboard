import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'formatText'})
export class FormatTextPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (value == null) {
      return value;
    } else {
      return value.toString()
        .replace('[', '')
        .replace(']', '')
        .split(/(?=[A-Z])/)
        .join(' ')
        .replace(/["']/g, '');
    }
  }
}
