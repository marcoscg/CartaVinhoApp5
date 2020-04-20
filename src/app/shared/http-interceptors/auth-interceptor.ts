import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthGuard } from '../service/auth-guard.service';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthGuard, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authHeader = this.auth.getAuthorizationHeader();

        const started = Date.now(); 

        let authReq = null;
        
        if (authHeader && req.url.search(/http:\/\/viacep.com.br\/ws\//i) < 0) {
            authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${authHeader}`)
              });  
              
        } else {
            authReq = req.clone();
        }

        return next.handle(authReq).pipe(
            tap(
                event => {
                    // There may be other events besides the response.
                    if (event instanceof HttpResponse) {                
                    }
                },
                error =>{
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 400) {
                            localStorage.clear();
                            this.router.navigate(['/login']);
                        }
                        if (error.status === 401) {
                            localStorage.clear();
                            this.router.navigate(['/login']);
                        }                        
                    }                    
                }),
          // Log when response observable either completes or errors
          finalize(() => {
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${req.urlWithParams}" in ${elapsed} ms.`;
            console.log(msg);
          })
        );
    }
}