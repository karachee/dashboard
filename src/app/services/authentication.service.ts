import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';
import {LocalStorageService} from './localStorage.service';
import {LocalDataRetrieverService} from './localDataRetriever.service';
import {UserService} from './user.service';

@Injectable()
export class AuthenticationService {
  private jwtHelperService: JwtHelperService;

  constructor(private localStorageService: LocalStorageService, private localDataRetrieverService: LocalDataRetrieverService, private userService: UserService, private httpClient: HttpClient) {
    this.jwtHelperService = new JwtHelperService();
  }

  public isAuthenticated() {
    let isAuthenticated: boolean;

    const jwt = this.jwt;
    isAuthenticated = jwt && !this.jwtHelperService.isTokenExpired(jwt);
    if (isAuthenticated) {
      if (!this.userService.username) {
        this.userService.username = this.getUsername();
      }
      return true;
    } else {
      return this.refreshTokenPromise();
    }
  }

  public refreshTokenPromise(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.httpClient.get(environment.authentication.jwtHost + environment.authentication.paths.refresh, {
        withCredentials: true,
        responseType: 'text'
      }).toPromise()
        .then((data) => {
          this.jwt = data;
          resolve(true);
        })
        .catch((error) => {
          this.logout();
          resolve(false);
        });
    });

    return promise;
  }

  public logout() {
    this.localStorageService.deleteJwt();
    this.redirectToLogin();
  }

  public redirectToLogin() {
    const jwtHost = environment.authentication.jwtHost;
    const jwtPath = (/^window\.location\.origin$/.test(jwtHost) ? eval(jwtHost) : jwtHost) + environment.authentication.paths.login;
    window.location.replace(jwtPath + window.location.origin + window.location.pathname);
  }

  public getUsername(): string {
    let username: string;

    const decoded = this.jwtHelperService.decodeToken(this.jwt);
    if (decoded) {
      username = decoded.sub;
    }

    return username;
  }

  get jwt(): string {
    return this.localStorageService.getJwt() as string;
  }

  set jwt(value: string) {
    this.localStorageService.setJwt(value);
  }
}
