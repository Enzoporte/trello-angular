import { Component } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent {

  constructor() { }

  card: Card = {
    id: 1,
    nombre: "a",
    desc: "asd",
    expDate: new Date()
  };

  deleteCard() {
    console.log("deleted Card");
    // .remove
  }

}
