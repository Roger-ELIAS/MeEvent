import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbonnementsModalPageRoutingModule } from './abonnements-modal-routing.module';

import { AbonnementsModalPage } from './abonnements-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbonnementsModalPageRoutingModule
  ],
  declarations: [AbonnementsModalPage]
})
export class AbonnementsModalPageModule {}
