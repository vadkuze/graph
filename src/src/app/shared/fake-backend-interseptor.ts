import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { of } from 'rxjs';

import { data } from './data'

@Injectable()
export class FakeBackendInterseptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (request.url.endsWith('/api/companies') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: data }));
    }
  }

}