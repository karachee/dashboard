import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UIRouterModule} from '@uirouter/angular';
import {PagesComponent} from './pages.component';
import {PAGES_STATES} from './pages.states';

import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocalDataRetrieverService} from "../services/localDataRetriever.service";
import {LocalStorageService} from "../services/localStorage.service";
import {LoadingModule} from "ngx-loading";
import {ThemeService} from './../services/theme.service';

import {SharedModule} from "./shared.module";

import {SortingModule} from "../components/sorting/sorting.module";
import {ContextMenuModule} from '../components/contextMenu/contextMenu.module';

import {HomeModule} from './home/home.module';
import {DataTableModule} from './dataTable/dataTable.module';
import {ChartModule} from './chart/chart.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    UIRouterModule.forChild({
      states: PAGES_STATES
    }),
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatExpansionModule,
    LoadingModule,
    SharedModule,
    HomeModule,
    ChartModule,
    ComponentsModule,
    DataTableModule,
    SortingModule,
    ContextMenuModule
  ],
  declarations: [
    PagesComponent
  ],
  providers: [
    LocalDataRetrieverService,
    LocalStorageService,
    ThemeService
  ]
})
export class PagesModule {

}
