import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRole} from "../models/userRole";
import {Person} from "../models/person";

@Injectable()
export class LocalDataRetrieverService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getDataWithPromise<T>(path) {
    return this.httpClient.get<T>(path).toPromise();
  }

  getData<T>(path) {
    return this.httpClient.get<T>(path);
  }

  getUserRoles() {
    return this.httpClient.get<UserRole[]>('./assets/userRoles.json');
  }

  getDataTableDataPromise() {
    return this.httpClient.get<Person[]>('./assets/dataTableData.json').toPromise();
  }
}
