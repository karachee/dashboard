import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingModule} from 'ngx-loading';
import {HomeComponent} from './home.component';
import {BottomSheetModule} from '../../components/bottomSheet/bottomSheet.module';
import {FlipperModule} from "../../components/flipper/flipper.module";

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatRadioModule,
  MatSliderModule
} from '@angular/material';

declare let require: any;

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    LoadingModule,
    BottomSheetModule,
    FlipperModule,
    MatSliderModule
  ],
  providers: [],
  entryComponents: []
})
export class HomeModule {
}
