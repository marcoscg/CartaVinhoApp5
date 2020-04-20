import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoVinhoPageRoutingModule } from './tipo-vinho-routing.module';

import { TipoVinhoPage } from './tipo-vinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoVinhoPageRoutingModule
  ],
  declarations: [TipoVinhoPage]
})
export class TipoVinhoPageModule {}
