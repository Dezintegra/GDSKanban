import { Component, OnInit, Input, AfterViewInit, Output, ChangeDetectorRef } from '@angular/core';
import { Task } from '../../store/model/task.model';
import { TasksStoreService } from '../../store/services/store.service';

import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements AfterViewInit {
  
  constructor(
    private tasksStore: TasksStoreService,
    private cd: ChangeDetectorRef
  ) { }
  
  @Output()
  public tasks: Task[] = [];
  
  @Input() state: string;
   
  ngAfterViewInit(): void {
    this.tasksStore.tasksUpdated$.pipe(
      filter( tasks => tasks != null),
      map( tasks => tasks.filter( task => task.state === this.state ) )
    ).subscribe( tasks => {
      this.tasks = tasks;
      this.cd.detectChanges();
    });
  }
  
}
