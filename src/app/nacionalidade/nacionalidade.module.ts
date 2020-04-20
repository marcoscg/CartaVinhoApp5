import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NacionalidadePageRoutingModule } from './nacionalidade-routing.module';

import { NacionalidadePage } from './nacionalidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NacionalidadePageRoutingModule
  ],
  declarations: [NacionalidadePage]
})
export class NacionalidadePageModule {}
