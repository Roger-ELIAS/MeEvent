import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtres-modal',
  templateUrl: './filtres-modal.component.html',
  styleUrls: ['./filtres-modal.component.scss'],
})
export class FiltresModalComponent implements OnInit {

  // Options du Slider permettant de choisi le typé d'évènement à rechercher
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: false
  };


  slideOptionsNbPers = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    direction: 'vertical'
  }

  
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

  constructor(public modalController: ModalController) { }

  ngOnInit() {}


  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


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
}
