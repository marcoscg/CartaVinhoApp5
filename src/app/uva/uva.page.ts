import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { UvaService } from './shared/uva.service';
import { Uva } from './shared/uva.model';

@Component({
  selector: 'app-uva',
  templateUrl: './uva.page.html',
  styleUrls: ['./uva.page.scss'],
  providers: [UvaService]
})
export class UvaPage implements OnInit {

  public uvas: Array<Uva> = [];
  public isHidden: boolean = true;

  constructor(
    public loadingController: LoadingController,
    private uvaService: UvaService,
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
      this.uvaService.getAll(search)
        .subscribe(
          (data: any) => {
            this.uvas = data.data.uva;
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
    this.router.navigate(['/vinho', { uva: id }]);
  }    

}
