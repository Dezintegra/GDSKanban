import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { BoardContainerComponent } from './board-container/board-container.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { StoreModule } from '../store/store.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    BoardContainerComponent, 
    LoginComponent, 
    CardComponent, 
    CardListComponent, 
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    StoreModule,
    KanbanBoardRoutingModule
  ]
})
export class KanbanBoardModule { }
