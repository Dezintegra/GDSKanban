import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { KanbanBoardRoutingModule } from './kanban-board-routing.module';
import { BoardContainerComponent } from './board-container/board-container.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { StoreModule } from '../store/store.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ResponsibleFilterComponent } from './responsible-filter/responsible-filter.component';
import { AngularMaterialModule } from './material.module';
import { TaskEditFormComponent } from './task-card/task-card.component';



@NgModule({
  declarations: [
    BoardContainerComponent, 
    LoginComponent, 
    CardComponent, 
    CardListComponent, 
    ToolbarComponent, 
    ResponsibleFilterComponent,
    TaskEditFormComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    StoreModule,
    KanbanBoardRoutingModule
  ]
})
export class KanbanBoardModule { }
