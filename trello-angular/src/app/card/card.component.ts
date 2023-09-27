import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent {
  constructor() { }

  @Input() cards:any ;

  deleteCard(button: any) {
    console.log("deleted Card");
    button.parentElement?.parentElement?.remove();
  }

}
