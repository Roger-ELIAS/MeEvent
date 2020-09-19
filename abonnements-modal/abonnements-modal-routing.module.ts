import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbonnementsModalPage } from './abonnements-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AbonnementsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbonnementsModalPageRoutingModule {}
