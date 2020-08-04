import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-evenement-modal',
  templateUrl: './evenement-modal.page.html',
  styleUrls: ['./evenement-modal.page.scss'],
})
export class EvenementModalPage implements OnInit {

  constructor(public modalController: ModalController) { }
  
  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
