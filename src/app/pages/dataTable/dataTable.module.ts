import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingModule} from 'ngx-loading';
import {DataTableComponent} from './dataTable.component';
import {SortingModule} from "../../components/sorting/sorting.module";

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';


@NgModule({
  declarations: [
    DataTableComponent,
  ],
  exports: [
    DataTableComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    LoadingModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSortModule,
    MatTableModule,
    SortingModule
  ],
  providers: [],
  entryComponents: []
})

export class DataTableModule {
}
