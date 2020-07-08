import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  events = [
    {
      idEvent: 0,
      name: "Sortie jogging trop cool entre ...",
      location: "Marseille, Bouches-du-Rhône",
      date: "Lundi 29 Juin 2020",
      heure: "14h-15h",
      nbPersonnes: "15",
      nbPersonnesMax: "18",
      type: "Sport",
      iconName: "barbell-sharp",
      className: "type_icon rotate_icon"
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
      iconName: "musical-notes-sharp",
      className: "type_icon"
    },

  ];

  constructor() {}

  getIconDatas(eventType) {
    let iconToReturn = {
      iconName: "",
      className: "type_icon",
      color: ""
    };

    switch(eventType) {
      case "Sport": {
        iconToReturn.iconName = "barbell-sharp";
        iconToReturn.className = "type_icon rotate_icon";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Musique": {
        iconToReturn.iconName = "musical-notes-sharp";
        iconToReturn.color = "#FFB82A";
        
        break;
      }

      case "Nature et Aventure": {
        iconToReturn.iconName = "leaf-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Formation": {
        iconToReturn.iconName = "school-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Photographie": {
        iconToReturn.iconName = "camera-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Cuisine": {
        iconToReturn.iconName = "pizza-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Culture": {
        iconToReturn.iconName = "book-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Film": {
        iconToReturn.iconName = "film-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Jeux": {
        iconToReturn.iconName = "game-controller-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Danse": {
        iconToReturn.iconName = "body-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Artisanat": {
        iconToReturn.iconName = "hammer-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Fête": {
        iconToReturn.iconName = "beer-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }

      case "Autre": {
        iconToReturn.iconName = "add-circle-sharp";
        iconToReturn.color = "#FFB82A";

        break;
      }
    }

    return iconToReturn;
  }
}
