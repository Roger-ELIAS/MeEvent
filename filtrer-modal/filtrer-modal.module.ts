import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrerModalPageRoutingModule } from './filtrer-modal-routing.module';

import { FiltrerModalPage } from './filtrer-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrerModalPageRoutingModule
  ],
  declarations: [FiltrerModalPage]
})
export class FiltrerModalPageModule {}
