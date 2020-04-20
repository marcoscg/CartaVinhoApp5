import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { NacionalidadeService } from './shared/nacionalidade.service';
import { Nacionalidade } from './shared/nacionalidade.model';

@Component({
  selector: 'app-nacionalidade',
  templateUrl: './nacionalidade.page.html',
  styleUrls: ['./nacionalidade.page.scss'],
})
export class NacionalidadePage implements OnInit {

  public nacionalidades: Array<Nacionalidade> = [];
  public isHidden: boolean = true;

  constructor(
    public loadingController: LoadingController,
    private nacionalidadeService: NacionalidadeService,
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
    this.nacionalidadeService.getAll(search)
      .subscribe(
        (data: any) => {
          this.nacionalidades = data.data.nacionalidade;
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
  doButtonSearch() {
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
    this.router.navigate(['/vinho', { nacionalidade: id }]);
  }

}
