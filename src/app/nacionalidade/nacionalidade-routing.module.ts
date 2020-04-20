import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NacionalidadePage } from './nacionalidade.page';

const routes: Routes = [
  {
    path: '',
    component: NacionalidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NacionalidadePageRoutingModule {}
