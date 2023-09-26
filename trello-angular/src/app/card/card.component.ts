import { Component } from '@angular/core';
import { CARDS } from '../mock-cards';
import { Card } from '../Card';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent {

  cards = CARDS;
  constructor() { }

  deleteCard(button: any) {
    console.log("deleted Card");
    button.parentElement?.parentElement?.remove();
  }

}
