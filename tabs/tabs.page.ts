import { Component, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventCreationModalPage } from  '../event-creation-modal/event-creation-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public modalController: ModalController) {}


  // Fonction utilisée afin d'afficher le modal de création d'évènement
  async openModalCreationEvent() {
    const modal = await this.modalController.create({
      component: EventCreationModalPage
      });
 
      return await modal.present();
  } 
}
