import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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

  constructor() {}

}
