import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinhoService {

  private path = environment.origin + '/vinho';

  constructor(private http: HttpClient) { }

  /**
   * Get All
   */
	getAll(search, nacionalidade, tipo, uva, valormin, valormax): Observable<any> {

    let compt = '?search=[]';

     if (search != '') {
      compt = compt + '|[nome,like,' + search + '%]';  
    } 

    if ((tipo) && (tipo != 'undefined') && (tipo != 'null')) {
      compt = compt + '|[tipo,=,' + tipo + ']';
    }    

    if ((nacionalidade) && (nacionalidade != 'undefined') && (nacionalidade != 'null')) {
      compt = compt + '|[nacionalidade,=,' + nacionalidade + ']';
    }

    if ((uva) && (uva != 'undefined') && (uva != 'null')) {
      compt = compt + '|[uva,=,' + uva + ']';
    } 
    
    if ((valormin) && (valormin != 'undefined') && (valormin != 'null')) {
      compt = compt + '|[valor,>=,' + valormin + ']';
    }
    
    if ((valormax) && (valormax != 'undefined') && (valormax != 'null')) {
      compt = compt + '|[valor,<=,' + valormax + ']';
    }    

    compt = compt + '&order=nome'; 

		return this.http.get(this.path + compt);
  }

  /**
   * Get All
   */
	getId(id): Observable<any> {
		return this.http.get(this.path + '/' + id);
  }  
}
