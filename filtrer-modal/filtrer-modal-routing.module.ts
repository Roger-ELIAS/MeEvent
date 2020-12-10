import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrerModalPage } from './filtrer-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrerModalPageRoutingModule {}
