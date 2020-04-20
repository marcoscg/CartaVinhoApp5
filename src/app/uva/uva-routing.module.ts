import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UvaPage } from './uva.page';

const routes: Routes = [
  {
    path: '',
    component: UvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UvaPageRoutingModule {}
