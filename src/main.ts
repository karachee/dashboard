import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if(environment.authenticate) {
  //Check for JWT. If present bootstrap, if not reach out to authentication service and store JWT to local storage
}else{
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
}
