import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  isEvenements = true;
  isNewMsg = true;

  abos = null;

  @ViewChild(IonSlides) slides: IonSlides;

  constructor() {}


  ngOnInit() {
    this.abos = this.getUserDatas(null);
  }


  evenements_click() {
    if (!this.isEvenements) {
      this.slides.slidePrev();
    } 
  }


  conversations_click() {
    if (this.isEvenements) {
      this.slides.slideNext();
    }
  }


  slides_changed() {
    this.isEvenements = !this.isEvenements;
  }


  private getUserDatas(listArobases) {
    // faudra récup sur la BD mais bon on verra pour cette partie

    let abos = [
      {
        arobase: "vynce_mazeltov",
        nom: "Vincent Mazel",
        titre: "Maître des Arcanes",
        image: "on verra pour l'image wesh",
        isAbonne: true,
        msgToDisplay: "est-ce que tu aimes les cochons d'inde ?"
      },
      {
        arobase: "vicimbert",
        nom: "Victor Imbert",
        titre: "Barman",
        image: "on verra pour l'image wesh",
        isAbonne: false,
        msgToDisplay: "des pommes, des pommes, des pom ..."
      },
      {
        arobase: "ursvamp",
        nom: "Valentin Formet",
        titre: "Coryphée",
        image: "on verra pour l'image wesh",
        isAbonne: true,
        msgToDisplay: "on va se faire une mouflette"
      },
      {
        arobase: "vynce_mazeltov",
        nom: "Vincent Mazel",
        titre: "Maître des Arcanes",
        image: "on verra pour l'image wesh",
        isAbonne: true,
        msgToDisplay: "on tient pas la perche sur le téleski"
      },
      {
        arobase: "vicimbert",
        nom: "Victor Imbert",
        titre: "Barman",
        image: "on verra pour l'image wesh",
        isAbonne: false,
        msgToDisplay: "attention l'assiette est très très chaude"
      },
      {
        arobase: "ursvamp",
        nom: "Valentin Formet",
        titre: "Coryphée",
        image: "on verra pour l'image wesh",
        isAbonne: true,
        msgToDisplay: "BAT TOI KEVIN"
      },
      {
        arobase: "vynce_mazeltov",
        nom: "Vincent Mazel",
        titre: "Maître des Arcanes",
        image: "on verra pour l'image wesh",
        isAbonne: true,
        msgToDisplay: "la théorie du big ban jimmy, le big bang"
      },
      {
        arobase: "vicimbert",
        nom: "Victor Imbert",
        titre: "Barman",
        image: "on verra pour l'image wesh",
        isAbonne: false,
        msgToDisplay: "mhhhhhhh tu viens danser ?"
      },
      {
        arobase: "ursvamp",
        nom: "Valentin Formet",
        titre: "Coryphée",
        image: "on verra pour l'image wesh",
        isAbonne: true,
        msgToDisplay: "mhhhhhhhhhhhhh tu viens t'coucher ?"
      }
    ]

    return abos;
  }

}
