import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { TipoVinhoService } from './shared/tipo-vinho.service';
import { TipoVinho } from './shared/tipo-vinho.model';

@Component({
  selector: 'app-tipo-vinho',
  templateUrl: './tipo-vinho.page.html',
  styleUrls: ['./tipo-vinho.page.scss'],
})
export class TipoVinhoPage implements OnInit {

  public tipoVinhos: Array<TipoVinho> = [];
  public isHidden: boolean = true;

  constructor(
    public loadingController: LoadingController,
    private tipoVinhoService: TipoVinhoService,
    private router: Router) { }

    ngOnInit() {      
      this.getAll('');
    }

    /**
     * 
     */
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Carregando...'
      });
      await loading.present();
    }
  
    /**
     * Busca todos os registros
     */
    getAll(search): void {  
      this.presentLoading();
      this.tipoVinhoService.getAll(search)
        .subscribe(
          (data: any) => {
            this.tipoVinhos = data.data.tipo;
            this.loadingController.dismiss();
          },
          () => {
            this.loadingController.dismiss();
          }
        );
    }

    /**
     * 
     */
    doButtonSearch()
    {
      this.isHidden = !this.isHidden;

      if (this.isHidden) {
        this.getAll('');  
      }
    }

    /**
     * 
     * @param event 
     */
    doSearchChange(event) {    
      const searchTerm = event.srcElement.value;    
      if (!searchTerm) {
        return;
      }
      if (searchTerm.length > 0) {
        this.getAll(searchTerm); 
      }
    }    

    /**
     * 
     * @param event 
     */
    doRefresh(event) {
      this.getAll('');
      event.target.complete();
    }  

  /**
   * 
   * @param id 
   */
  linkVinho(id) {
    this.router.navigate(['/vinho', { tipo: id }]);
  }    

}
