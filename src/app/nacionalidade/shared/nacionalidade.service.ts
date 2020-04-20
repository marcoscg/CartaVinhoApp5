import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadeService {

  private path = environment.origin + '/nacionalidade';

  constructor(private http: HttpClient) { }

  /**
   * Get All
   */
	getAll(search): Observable<any> {

    let compt = '';

    if (search != '') {
      compt = '?search=[pais,like,' + search + '%]&order=pais';  
    }

		return this.http.get(this.path + compt);
  }

}
