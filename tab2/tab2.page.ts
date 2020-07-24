import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvenementModalPage } from '../evenement-modal/evenement-modal.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public modalController: ModalController) {}

  // Options du Slider permettant de choisi le typé d'évènement à rechercher
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: false
  };

  // Tous les types d'évènements disponibles
  slides = [ 
    "Artisanat", 
    "Autre", 
    "Cuisine", 
    "Culture", 
    "Danse", 
    "Fête", 
    "Film", 
    "Formation",
    "Jeux",
    "Musique",
    "Nature",
    "Photo",
    "Sport"
  ];

  // Liste d'évènements à afficher (ils seront à l'avenir récupérés dans la BD)
  events = [
    {
      id: 0,
      name: "Sortie jogging trop cool entre ...",
      location: "Marseille, Bouches-du-Rhône",
      date: "Lundi 29 Juin 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Sport",
    },
    {
      id: 1,
      name: "AC/DC dans le garage",
      location: "Marseille, Bouches-du-Rhône",
      date: "Samedi 4 Juillet 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Musique",
    },
    {
      id: 0,
      name: "Sortie jogging trop cool entre ...",
      location: "Marseille, Bouches-du-Rhône",
      date: "Lundi 29 Juin 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Sport",
    },
    {
      id: 1,
      name: "AC/DC dans le garage",
      location: "Marseille, Bouches-du-Rhône",
      date: "Samedi 4 Juillet 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Musique",
    },
    {
      id: 0,
      name: "Sortie jogging trop cool entre ...",
      location: "Marseille, Bouches-du-Rhône",
      date: "Lundi 29 Juin 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Sport",
    },
    {
      id: 1,
      name: "AC/DC dans le garage",
      location: "Marseille, Bouches-du-Rhône",
      date: "Samedi 4 Juillet 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Musique",
    },
    {
      id: 0,
      name: "Sortie jogging trop cool entre ...",
      location: "Marseille, Bouches-du-Rhône",
      date: "Lundi 29 Juin 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Sport",
    },
    {
      id: 1,
      name: "AC/DC dans le garage",
      location: "Marseille, Bouches-du-Rhône",
      date: "Samedi 4 Juillet 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Musique",
    },
  ];

  // Récupération d'un évènement par son id
  private getEventDatasById(eventId) {
    for (let i = 0; i < this.events.length; i++) 
      if (this.events[i].id == eventId)
        return this.events[i];

    return null;
  }

  // Fonction utilisée afin d'afficher les informations d'un évènement
  async openEventModal(eventId) {
    let eventDatas = this.getEventDatasById(eventId);

    console.log(eventDatas);

    if (eventDatas != null) {
      const modal = await this.modalController.create({
        component: EvenementModalPage,
        cssClass: 'my-custom-class',
        componentProps: {
          "name": eventDatas.name,
          "location": eventDatas.location,
          "date": eventDatas.date,
          "heure": eventDatas.heure,
          "nbPersonnes": eventDatas.nbPersonnes,
          "nbPersonnesMax": eventDatas.nbPersonnesMax,
          "type": eventDatas.type
        }  
      });

      
      return await modal.present();
    }
    else {
      // Traiter le cas du null (qui ne devrait normalement pas arriver mdr)
    }  
  }
}
