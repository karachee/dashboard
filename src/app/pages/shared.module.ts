import {NgModule} from '@angular/core';
import {SortByPipe} from './../pipes/sortBy.pipe';
import {MillisTohhmmsss} from './../pipes/millisTohhmmsss.pipe';
import {FormatTextPipe} from './../pipes/formatString.pipe';
import {CurrencyWithErrorHandlingPipe} from './../pipes/currencyWithErrorHandling.pipe';
import {PercentageWithErrorHandlingPipe} from './../pipes/percentageWithErrorHandling.pipe';
import {SafeHtml} from "../pipes/safeHtml.pipe";
import {CleanInputPipe} from "../pipes/cleanInput.pipe";

@NgModule({
  declarations: [
    CleanInputPipe,
    SortByPipe,
    MillisTohhmmsss,
    FormatTextPipe,
    CurrencyWithErrorHandlingPipe,
    PercentageWithErrorHandlingPipe,
    SafeHtml
  ],
  exports: [
    CleanInputPipe,
    SortByPipe,
    MillisTohhmmsss,
    FormatTextPipe,
    CurrencyWithErrorHandlingPipe,
    PercentageWithErrorHandlingPipe,
    SafeHtml
  ],
  imports: [],
  providers: []
})
export class SharedModule {

}
