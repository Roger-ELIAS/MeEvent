import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  // Options du Slider permettant de visualiser ses médailles obtenues
  slideOptionsMedals = {
    initialSlide: 0,
    slidesPerView: 4,
    autoplay: false
  };


  slideOptionsEvents = {
    initialSlide: 0,
    slidesPerView: 1.5,
    autoplay: false
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

  constructor() { }

  ngOnInit() {
  }

}
