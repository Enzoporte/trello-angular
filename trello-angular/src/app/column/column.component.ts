import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-column',
  templateUrl: 'column.component.html',
  styleUrls: ['column.component.css']
})
export class ColumnComponent {
  @Input() title?: string;
  cards = CARDS; // Cartas importadas de mock-cards.ts con un array de Cartas
}
