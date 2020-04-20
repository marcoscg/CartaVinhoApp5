import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UvaService {

  private path = environment.origin + '/uva';

  constructor(private http: HttpClient) { }

  /**
   * Get All
   */
	getAll(search): Observable<any> {

    let compt = '';

    if (search != '') {
      compt = '?search=[descricao,like,' + search + '%]&order=descricao';  
    }

		return this.http.get(this.path + compt);
  }
  
}
