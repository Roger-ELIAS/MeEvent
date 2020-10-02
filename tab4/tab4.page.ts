import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AbonnementsModalPage } from '../abonnements-modal/abonnements-modal.page';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  userProfile = { 
    email: "camille.mazel@gmail.com", // utilisation d’un index pour le rendre unique
    mdp: "patapouf16", 
    nom: "Camille Mazel", 
    arobase: "camillou16", // utilisation d’un index pour le rendre unique
    age: "19 ans", 
    sexe: "femme", 
    photo : "je sais pas comment on gère ça mdr", 
    description: "Salut salut je sais carrément pas quoi mettre en description donc je vais juste laisser ça. Je fais pleins d'événements vraiment cool mais j'ai pas d'amis, c'est fort dommage !", 
    isPremium: false, 
    titreAffiche: "Première Cuite", 
    showEventsCreated: true, 
    showEventsJoined: true, 
    eventsCreated : [0, 1, 0], // liste de idEvent (à revoir)
    eventsJoined : [0, 1, 0], // liste de idEvent (à revoir)
    abonnements : ["vyncemazeltov", "vicimbert"], // liste de arobase
    abonnes : ["vyncemazeltov", "vyncemazeltov2"], // liste de arobase
    collection : [ 
      { 
        nomTitre: "Première Cuite", 
        badge: "photo du badge mdr" 
      } 
    ], 
    stats : { 
      nbEventsCreated: "1000", 
      listPeopleEncountered : ["vyncemazeltov", "vyncemazeltov2"],  
      nbEventsCreatedByType : {
        sport: 12, 
        formation: 2, 
        nature: 5 // et tous les autres
      }  
    },
    conversations : [ "je sais pas comment on va faire ça issou" ] // list de idConversation
  };
    

  // Options du Slider permettant de visualiser ses médailles obtenues
  slideOptionsMedals = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: false
  };


  // Options du Slider permettant de visualiser ses stats
  slideOptionsStats = {
    initialSlide: 0,
    slidesPerView: 1.6,
    autoplay: false,
    spaceBetween: 12
  };


  stats = {

  }

  slideOptionsEvents = {
    initialSlide: 0,
    slidesPerView: 1.4,
    autoplay: false,
    spaceBetween: 12
  };


  eventsCreated = [
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
    }
  ];  


  coverImgSrc = "../assets/images/surf.png";

  constructor(public modalController: ModalController) { }

  // Fonction utilisée afin d'afficher les abonnements du compte
  async openModalAbonnements() {
    if (this.userProfile.abonnements.length > 0) {
      const modal = await this.modalController.create({
        component: AbonnementsModalPage,
        componentProps: {
          "listArobases": this.userProfile.abonnements,
          "isAbonnes": false,
          "profileName": this.userProfile.nom
        }  
      });
 
      return await modal.present();
    } 
  }

  // Fonction utilisée afin d'afficher les abonnés du compte
  async openModalAbonnes() {
    if (this.userProfile.abonnes.length > 0) {
      const modal = await this.modalController.create({
        component: AbonnementsModalPage,
        componentProps: {
          "listArobases": this.userProfile.abonnements,
          "isAbonnes": true,
          "profileName": this.userProfile.nom
        }  
      });
 
      return await modal.present();
    } 
  }

  ngOnInit() {
  }

}
