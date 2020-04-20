import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { VinhoService } from '../vinho/shared/vinho.service';
import { Vinho } from '../vinho/shared/vinho.model';

@Component({
  selector: 'app-vinho-form',
  templateUrl: './vinho-form.page.html',
  styleUrls: ['./vinho-form.page.scss'],
})
export class VinhoFormPage implements OnInit {

  public hiddenCard = true;
  public hiddenImg0 = true;
  public hiddenImg1 = true;
  public vinho: Vinho = new Vinho;
  public vinhoId;
  public foto0;
  public foto1;

  constructor(
    public loadingController: LoadingController,
    private vinhoService: VinhoService,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.vinhoId = params.get('id');
    });
  }

  ngOnInit() {
    this.getId();
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
  getId(): void {
    this.presentLoading();
    this.vinhoService.getId(this.vinhoId)
      .subscribe(
        (data: any) => {
          this.vinho = data;
          if (data.fotos.length >= 1) {
            this.foto0 = data.fotos[0].foto;
            this.hiddenImg0 = false;
          }
          if (data.fotos.length >= 2) {
            this.foto1 = data.fotos[1].foto;
            this.hiddenImg1 = false;
          }
          this.loadingController.dismiss(); 
          this.hiddenCard = false;         
        },
        () => {
          this.loadingController.dismiss();
        }
      );
  }

}
