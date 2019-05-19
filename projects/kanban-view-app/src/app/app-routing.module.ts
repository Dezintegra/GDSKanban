import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';

const routes: Routes = [
  {
    path:'',
    loadChildren: './kanban-board/kanban-board.module#KanbanBoardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
