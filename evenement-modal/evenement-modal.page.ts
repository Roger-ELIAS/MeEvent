import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-evenement-modal',
  templateUrl: './evenement-modal.page.html',
  styleUrls: ['./evenement-modal.page.scss'],
})
export class EvenementModalPage implements OnInit {

  // Données récupérées par le biais d'un modal ouvert sur la vue dédiée à la recherche d'évènements
  @Input() name: string;
  @Input() location: string;
  @Input() date: string;
  @Input() heure: string;
  @Input() nbPersonnes: string;
  @Input() nbPersonnesMax: string;
  @Input() type: string;
  @Input() text: string;

  constructor(public modalController: ModalController) { }
  
  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
