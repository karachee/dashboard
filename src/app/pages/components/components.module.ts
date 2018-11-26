import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingModule} from 'ngx-loading';
import {ComponentsComponent} from './components.component';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatRadioModule,
  MatSliderModule,
  MatSelectModule,
  MatSlideToggleModule
} from '@angular/material';
import {FlipperModule} from "../../components/flipper/flipper.module";
import {ContextMenuModule} from "../../components/contextMenu/contextMenu.module";
import {BottomSheetModule} from '../../components/bottomSheet/bottomSheet.module';
import {SharedModule} from "../shared.module";

@NgModule({
  declarations: [
    ComponentsComponent,
  ],
  exports: [
    ComponentsComponent
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
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    FlipperModule,
    MatRadioModule,
    MatSliderModule,
    ContextMenuModule,
    BottomSheetModule,
    SharedModule
  ],
  providers: [],
  entryComponents: []
})

export class ComponentsModule {
}
