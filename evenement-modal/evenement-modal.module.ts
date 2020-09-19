import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvenementModalPageRoutingModule } from './evenement-modal-routing.module';

import { EvenementModalPage } from './evenement-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvenementModalPageRoutingModule
  ],
  declarations: [EvenementModalPage]
})
export class EvenementModalPageModule {}
