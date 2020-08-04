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
export class EvenementModalPageModule {

  // Données récupérées par le biais d'un modal ouvert sur la vue dédiée à la recherche d'évènements
  @Input() name: string;
  @Input() location: string;
  @Input() date: string;
  @Input() heure: string;
  @Input() nbPersonnes: string;
  @Input() nbPersonnesMax: string;
  @Input() type: string;
  @Input() text: string;
}
