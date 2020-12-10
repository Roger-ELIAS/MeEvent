import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvenementModalPage } from '../evenement-modal/evenement-modal.page';
import { FiltrerModalPage } from '../filtrer-modal/filtrer-modal.page';


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

  listBooleans = {
    "Artisanat": false,
    "Autre": false,
    "Cuisine": false,
    "Culture": false,
    "Danse": false,
    "Fête": false,
    "Film": false,
    "Formation": false,
    "Jeux": false,
    "Musique": false,
    "Nature": false,
    "Photo": false,
    "Sport": false
  }


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
      location: "Marseille",
      date: "Lundi 29 Juin 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "17",
      type: "Sport",
      membres: [],
      creator: "",
      text: "Super évènement où on va courir et se dépenser un max, on va vraiment s'amuser comme des petits fous !!!!!"
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
      text: "Prêt à faire péter les décibels ? Alors rejoins-nous dans cet incroyable évènement !"
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
      text: "Super évènement où on va courir et se dépenser un max, on va vraiment s'amuser comme des petits fous !!!!!"
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
      text: "Prêt à faire péter les décibels ? Alors rejoins-nous dans cet incroyable évènement !"
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
      text: "Super évènement où on va courir et se dépenser un max, on va vraiment s'amuser comme des petits fous !!!!!"
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
      text: "Prêt à faire péter les décibels ? Alors rejoins-nous dans cet incroyable évènement !"
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
      text: "Super évènement où on va courir et se dépenser un max, on va vraiment s'amuser comme des petits fous !!!!!"
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
      text: "Prêt à faire péter les décibels ? Alors rejoins-nous dans cet incroyable évènement !"
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
        componentProps: {
          "name": eventDatas.name,
          "location": eventDatas.location,
          "date": eventDatas.date,
          "heure": eventDatas.heure,
          "nbPersonnes": eventDatas.nbPersonnes,
          "nbPersonnesMax": eventDatas.nbPersonnesMax,
          "type": eventDatas.type,
          "text": eventDatas.text
        }  
      });

      
      return await modal.present();
    }
    else {
      // Traiter le cas du null (qui ne devrait normalement pas arriver mdr)
    }  
  }


  /*async openModalFiltrer() {
    const modal = await this.modalController.create({
      component: AbonnementsModalPage,
      componentProps: {
        "listArobases": this.userProfile.abonnements,
        "isAbonnes": true,
        "profileName": this.userProfile.nom
      }  
    });
 
    return await modal.present();
  }*/ 


  clickIconFiltrate(slide) {
    if (this.listBooleans[slide])
      this.listBooleans[slide] = !this.listBooleans[slide];

    else {
      for(let type of Object.keys(this.listBooleans)) {
        if (this.listBooleans[type]) {
          this.listBooleans[type] = !this.listBooleans[type];

          break;
        }
      }

      this.listBooleans[slide] = !this.listBooleans[slide];
    } 
  }


  // Fonction utilisée afin d'afficher le modal de filtres
  async openModalFiltres() {
    const modal = await this.modalController.create({
      component: FiltrerModalPage
      });
 
      return await modal.present();
  }
}
