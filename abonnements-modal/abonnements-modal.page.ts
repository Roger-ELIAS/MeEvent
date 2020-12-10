import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-abonnements-modal',
  templateUrl: './abonnements-modal.page.html',
  styleUrls: ['./abonnements-modal.page.scss'],
})
export class AbonnementsModalPage implements OnInit {

  // Données récupérées par le biais d'un modal ouvert sur le profil
  @Input() isAbonnes: boolean;
  @Input() listArobases: any;
  @Input() profileName: string;

  @ViewChild(IonSlides) slides: IonSlides;

  abos = null;

  // Options du Slider permettant de switch entre Abonnées / Abonnements
  slideOptionsAbos = {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: false
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.abos = this.getUserDatas(this.listArobases);

    /*let initialSlide = 0;

    if (!this.isAbonnes)
      initialSlide = 1;

    this.slideOptionsAbos = {
      initialSlide: initialSlide,
      slidesPerView: 1,
      centeredSlides: true,
      autoplay: false
    };*/

    //this.slides.lockSwipes(true);
  }

  private getUserDatas(listArobases) {
    // faudra récup sur la BD mais bon on verra pour cette partie

    let abos = [
      {
        arobase: "vynce_mazeltov",
        nom: "Vincent Mazel",
        titre: "Maître des Arcanes",
        image: "on verra pour l'image wesh",
        isAbonne: true
      },
      {
        arobase: "vicimbert",
        nom: "Victor Imbert",
        titre: "Barman",
        image: "on verra pour l'image wesh",
        isAbonne: false
      },
      {
        arobase: "ursvamp",
        nom: "Valentin Formet",
        titre: "Coryphée",
        image: "on verra pour l'image wesh",
        isAbonne: true
      },
      {
        arobase: "vynce_mazeltov",
        nom: "Vincent Mazel",
        titre: "Maître des Arcanes",
        image: "on verra pour l'image wesh",
        isAbonne: true
      },
      {
        arobase: "vicimbert",
        nom: "Victor Imbert",
        titre: "Barman",
        image: "on verra pour l'image wesh",
        isAbonne: false
      },
      {
        arobase: "ursvamp",
        nom: "Valentin Formet",
        titre: "Coryphée",
        image: "on verra pour l'image wesh",
        isAbonne: true
      },
      {
        arobase: "vynce_mazeltov",
        nom: "Vincent Mazel",
        titre: "Maître des Arcanes",
        image: "on verra pour l'image wesh",
        isAbonne: true
      },
      {
        arobase: "vicimbert",
        nom: "Victor Imbert",
        titre: "Barman",
        image: "on verra pour l'image wesh",
        isAbonne: false
      },
      {
        arobase: "ursvamp",
        nom: "Valentin Formet",
        titre: "Coryphée",
        image: "on verra pour l'image wesh",
        isAbonne: true
      }
    ]

    return abos;
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }


  abonnes_click() {
    if (!this.isAbonnes) {
      this.slides.slideNext();
    } 
  }


  abonnements_click() {
    if (this.isAbonnes) {
      this.slides.slidePrev();
    }
  }


  slides_changed() {
    this.isAbonnes = !this.isAbonnes;
  }
}
