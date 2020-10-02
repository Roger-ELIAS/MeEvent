import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCreationModalPageRoutingModule } from './event-creation-modal-routing.module';

import { EventCreationModalPage } from './event-creation-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventCreationModalPageRoutingModule
  ],
  declarations: [EventCreationModalPage]
})
export class EventCreationModalPageModule {}
