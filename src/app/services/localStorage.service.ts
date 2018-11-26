import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class LocalStorageService {

  private _historyDepth: number = 50;

  getTheme() {
    return localStorage.getItem("theme");
  }

  setTheme(value: string) {
    return localStorage.setItem("theme", value);
  }

  getJwt() {
    return localStorage.getItem(environment.authentication.storeKey);
  }

  setJwt(jwt) {
    localStorage.setItem(environment.authentication.storeKey, jwt);
  }

  deleteJwt() {
    localStorage.removeItem(environment.authentication.storeKey);
  }

  get historyDepth(): number {
    return this._historyDepth;
  }

  set historyDepth(value: number) {
    this._historyDepth = value;
  }
}
