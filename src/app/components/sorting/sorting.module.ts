import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SortingComponent} from './sorting.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSelectModule} from '@angular/material';
import {SortingDialogComponent} from "./sortingDialog/sortingDialog.component";
import {DragulaModule} from 'ng2-dragula';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SortingComponent,
    SortingDialogComponent
  ],
  exports: [
    SortingComponent,
    SortingDialogComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    SortingDialogComponent
  ]
})
export class SortingModule {
}
