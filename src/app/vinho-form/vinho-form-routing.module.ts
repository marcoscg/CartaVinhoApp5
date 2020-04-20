import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinhoFormPage } from './vinho-form.page';

const routes: Routes = [
  {
    path: '',
    component: VinhoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinhoFormPageRoutingModule {}
