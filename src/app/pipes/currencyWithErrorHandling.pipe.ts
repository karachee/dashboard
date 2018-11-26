import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'currencyWithErrorHandling'})
export class CurrencyWithErrorHandlingPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (value && !isNaN(+value)) {
      var numberValue = Number(value);
      value = '$' + numberValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return value
  }
}
