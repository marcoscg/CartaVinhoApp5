import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinhoPage } from './vinho.page';

const routes: Routes = [
  {
    path: '',
    component: VinhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinhoPageRoutingModule {}
