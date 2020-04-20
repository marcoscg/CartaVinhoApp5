import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoVinhoPage } from './tipo-vinho.page';

const routes: Routes = [
  {
    path: '',
    component: TipoVinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoVinhoPageRoutingModule {}
