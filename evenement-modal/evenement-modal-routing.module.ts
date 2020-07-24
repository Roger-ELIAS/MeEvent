import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementModalPage } from './evenement-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementModalPageRoutingModule {}
