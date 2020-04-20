import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { TipoVinhoService } from '../tipo-vinho/shared/tipo-vinho.service';
import { TipoVinho } from '../tipo-vinho//shared/tipo-vinho.model';
import { UvaService } from '../uva/shared/uva.service';
import { Uva } from '../uva/shared/uva.model';
import { NacionalidadeService } from '../nacionalidade/shared/nacionalidade.service';
import { Nacionalidade } from '../nacionalidade/shared/nacionalidade.model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public hiddenVinho = true;
  public hiddenNacionalidade = true;
  public hiddenUva = true;

  public tipo;
  public nacionalidade;
  public uva;
  public valormin;
  public valormax;

  public tipoVinhos: Array<TipoVinho> = [];
  public nacionalidades: Array<Nacionalidade> = [];
  public uvas: Array<Uva> = [];

  constructor(
    public loadingController: LoadingController,
    private router: Router,
    private tipoVinhoService: TipoVinhoService,
    private nacionalidadeService: NacionalidadeService,
    private uvaService: UvaService,
  ) { }

  ngOnInit() {
    this.getAllTipo('');
    this.getAllUva('');
    this.getAllNacionalidade('');
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
  getAllTipo(search): void {
    this.hiddenVinho = false;
    this.tipoVinhoService.getAll(search)
      .subscribe(
        (data: any) => {
          this.tipoVinhos = data.data.tipo;
          this.hiddenVinho = true;
        },
        () => {
          this.hiddenVinho = true;
        }
      );
  }

  /**
 * Busca todos os registros
 */
  getAllUva(search): void {
    this.hiddenUva = false;
    this.uvaService.getAll(search)
      .subscribe(
        (data: any) => {
          this.uvas = data.data.uva;
          this.hiddenUva = true;
        },
        () => {
          this.hiddenUva = true;
        }
      );
  }

  /**
   * Busca todos os registros
   */
  getAllNacionalidade(search): void {
    this.hiddenNacionalidade = false;
    this.nacionalidadeService.getAll(search)
      .subscribe(
        (data: any) => {
          this.nacionalidades = data.data.nacionalidade;
          this.hiddenNacionalidade = true;
        },
        () => {
          this.hiddenNacionalidade = true;
        }
      );
  }

  onPesquisar() {
    this.router.navigate(['/vinho', {
      tipo: this.tipo,
      nacionalidade: this.nacionalidade,
      uva: this.uva,
      valormin: this.valormin,
      valormax: this.valormax
    }]);
  }

  onLimpar() {
    this.tipo = null;
    this.nacionalidade = null;
    this.uva = null;
    this.valormin = null;
    this.valormax = null;
  }

}
