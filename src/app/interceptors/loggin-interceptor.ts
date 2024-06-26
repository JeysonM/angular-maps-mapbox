import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('LoggingInterceptor - HTTP request intercepted:', req);
    // return next.handle(req);
    const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer my-token')
      });
  
      return next.handle(clonedRequest);
  }
}