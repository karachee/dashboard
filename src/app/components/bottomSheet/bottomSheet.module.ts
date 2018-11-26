import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BottomSheetComponent} from './bottomSheet.component';

@NgModule({
  declarations: [
    BottomSheetComponent
  ],
  exports: [
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class BottomSheetModule {
}
