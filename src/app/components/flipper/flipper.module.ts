import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlipperComponent} from './flipper.component';

@NgModule({
  declarations: [
    FlipperComponent
  ],
  exports: [
    FlipperComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class FlipperModule {
}
