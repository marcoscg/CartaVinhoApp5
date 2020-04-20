import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoVinhoService {

  private path = environment.origin + '/tipo';

  constructor(private http: HttpClient) { }

  /**
   * Get All
   */
	getAll(search): Observable<any> {

    let compt = '';

    if (search != '') {
      compt = '?search=[nome,like,' + search + '%]&order=nome';  
    }

		return this.http.get(this.path + compt);
  }
}
