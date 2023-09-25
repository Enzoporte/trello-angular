import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-column',
  templateUrl: 'column.component.html',
  styleUrls: ['column.component.css']
})
export class ColumnComponent {
  @Input() title?: string;
  cards: CardComponent[] = [];
}
