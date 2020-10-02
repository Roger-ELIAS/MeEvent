import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCreationModalPage } from './event-creation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EventCreationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventCreationModalPageRoutingModule {}
