import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import {ColumnComponent} from './column/column.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  {path: 'column', component: ColumnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }