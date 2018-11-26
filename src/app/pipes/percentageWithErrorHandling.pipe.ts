import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'percentageWithErrorHandling'})
export class PercentageWithErrorHandlingPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    return (value && !isNaN(+value)) ? (Number(value) * 100) + '%' : value;
  }
}
