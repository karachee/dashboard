import {Pipe, PipeTransform} from '@angular/core';
import {CleanInput} from "../utils/cleanInput";

@Pipe({name: 'cleanInput'})
export class CleanInputPipe implements PipeTransform {
  transform(input: string): any {
    return CleanInput.cleanString(input);
  }
}
