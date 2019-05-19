import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { BoardContainerComponent } from './board-container/board-container.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';

import {MatCardModule} from '@angular/material';


@NgModule({
  declarations: [BoardContainerComponent, LoginComponent, CardComponent],
  imports: [
    MatCardModule,
    CommonModule,
    KanbanBoardRoutingModule
  ]
})
export class KanbanBoardModule { }
