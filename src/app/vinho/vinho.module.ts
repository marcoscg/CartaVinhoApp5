import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinhoPageRoutingModule } from './vinho-routing.module';

import { VinhoPage } from './vinho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinhoPageRoutingModule
  ],
  declarations: [VinhoPage]
})
export class VinhoPageModule {}
