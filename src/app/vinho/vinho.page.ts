import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { VinhoService } from './shared/vinho.service';
import { Vinho } from './shared/vinho.model';

@Component({
  selector: 'app-vinho',
  templateUrl: './vinho.page.html',
  styleUrls: ['./vinho.page.scss'],
})
export class VinhoPage implements OnInit {

  public vinhos: Array<Vinho> = [];
  public isHidden: boolean = true;
  public nacionalidade;
  public tipo;
  public uva;
  public valormin;
  public valormax;

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private vinhoService: VinhoService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(params => {
        this.nacionalidade = params.get('nacionalidade');
        this.tipo = params.get('tipo');
        this.uva = params.get('uva');
        this.valormin = params.get('valormin');
        this.valormax = params.get('valormax');        
      });      
  }

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
    this.vinhoService.getAll(search,this.nacionalidade, this.tipo, this.uva, this.valormin, this.valormax)
      .subscribe(
        (data: any) => {
          this.vinhos = data.data.vinho;
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
    console.log(id);
    this.router.navigate(['/vinho-form', { id: id }]);
  }   

}
