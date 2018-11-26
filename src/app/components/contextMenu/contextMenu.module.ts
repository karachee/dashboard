import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ContextMenuComponent} from './contextMenu.component';

@NgModule({
  declarations: [
    ContextMenuComponent
  ],
  exports: [
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class ContextMenuModule {
}
