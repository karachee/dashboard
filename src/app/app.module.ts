import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {PagesModule} from './pages/pages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Transition, TransitionService} from "@uirouter/core";
import {AuthenticationService} from "./services/authentication.service";
import {UserService} from "./services/user.service";
import {LoadingModule} from "ngx-loading";
import {HttpLogInterceptor} from "./utils/httpLogInterceptor";
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      useHash: true,
      otherwise: {state: 'home'}
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    LoadingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLogInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private transitionService: TransitionService, private authenticationService: AuthenticationService) {
    transitionService.onBefore({}, (transition: Transition) => {
      return (environment.authenticate) ? authenticationService.isAuthenticated() : true;
    });
  }
}
