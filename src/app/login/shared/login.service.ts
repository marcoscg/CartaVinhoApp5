import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Authorization } from './authorization.model';
import { Login } from './login.model';
import { environment } from './../../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  private path = environment.origin + '/auth/login';

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Faz autenticação do usuário
   * @param {Login} login
   * @returns {Observable<any>}
   * @memberof LoginService
   */
  login(login: Login): Observable<any> {
    const creds = {
      email: login.username,
      password: login.password
    };

    return this.http.post(this.path, creds)
      .pipe(
        map((authorization: Authorization) => {
          localStorage.setItem('access_token', authorization.access_token);
        }
        )
      );
  }

  /**
   * 
   * @param link 
   */
  getLogin(link: string): Observable<any> {
    return this.http.get(link)
      .pipe(
        map((authorization: Authorization) => {
          localStorage.setItem('access_token', authorization.access_token);
        }
        )
      );
  }

  /**
   * Remove autenticação do usuário
   * @memberof LoginService
   */
  logout(): void {
    localStorage.removeItem('access_token');
  }

}

