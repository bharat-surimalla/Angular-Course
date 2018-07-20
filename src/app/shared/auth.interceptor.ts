import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

// this interceptor handles requests before they're sent, it adds auth params so you don't need to on every request
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted!', req);
    const copiedReq = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
    return next.handle(copiedReq);
    // return null;
  }
}