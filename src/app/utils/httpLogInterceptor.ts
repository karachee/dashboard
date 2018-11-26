import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {finalize, tap} from "rxjs/operators";

@Injectable()
export class HttpLogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(req).pipe(
      tap(event => {
          status = (event instanceof HttpResponse) ? 'succeeded' : '';
        }, error => status = 'failed'
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        if ('failed' == status) {
          console.log(`${req.method} ${req.urlWithParams} ${status} in ${elapsedTime} ms`);
        }
      })
    );
  }
}
