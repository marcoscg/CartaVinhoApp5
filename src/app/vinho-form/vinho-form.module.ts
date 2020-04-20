import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinhoFormPageRoutingModule } from './vinho-form-routing.module';

import { VinhoFormPage } from './vinho-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinhoFormPageRoutingModule
  ],
  declarations: [VinhoFormPage]
})
export class VinhoFormPageModule {}
