import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardContainerComponent } from './board-container/board-container.component';

const routes: Routes = [
  {
    path:'',
    component: BoardContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanBoardRoutingModule { }
