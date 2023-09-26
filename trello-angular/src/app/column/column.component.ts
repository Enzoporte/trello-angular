import { Component, Input } from '@angular/core';
import { COLS } from '../mock-cols';

@Component({
  selector: 'app-column',
  templateUrl: 'column.component.html',
  styleUrls: ['column.component.css']
})
export class ColumnComponent {
  @Input() title?: string;
  cols = COLS; // Cartas importadas de mock-cards.ts con un array de Cartas
}
