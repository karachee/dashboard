import {Injectable} from '@angular/core';
import {LocalDataRetrieverService} from "./localDataRetriever.service";
import {UserRole} from "../models/userRole";

@Injectable()
export class UserService {

  private _username: string;
  private _roles: String[];

  constructor(private localDataRetrieverService: LocalDataRetrieverService) {

  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
    if (!this.roles) {
      this.getUserRoles();
    }
  }

  get roles(): String[] {
    return this._roles;
  }

  set roles(value: String[]) {
    this._roles = value;
  }

  getUserRoles() {
    this.localDataRetrieverService.getUserRoles().subscribe(
      data => {
        let userRoles: UserRole[] = data;
        let userRole = (userRoles) ? userRoles.find(x => x.username.toLowerCase() == this.username.toLowerCase()) : null;
        this.roles = (userRole) ? userRole.roles : ["USER"];
      },
      error => {
        console.log("Error getting userRoles, " + error);
      }
    );
  }
}


