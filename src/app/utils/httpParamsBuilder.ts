import {HttpParams} from "@angular/common/http";

export class HttpParamsBuilder {
  private keyMap = {};

  public static newBuilder(): HttpParamsBuilder {
    return new HttpParamsBuilder();
  }

  public add(key: string, value: any): HttpParamsBuilder {
    if (value != null && value != '') {
      this.keyMap[key] = value;
    }
    return this;
  }

  public get(): HttpParams {
    let httpParams = new HttpParams();
    Object.keys(this.keyMap).forEach(key => httpParams = httpParams.append(key, this.keyMap[key]));
    return httpParams;
  }
}

