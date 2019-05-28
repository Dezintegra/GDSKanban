import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TasksStoreService } from '../../store/services/store.service';

@Component({
  selector: 'app-taskNumber-filter',
  template: `<input [(ngModel)]="taskNumber" (keyup)="inputChanged()"/>`
})
export class TaskNumberFilterComponent implements OnInit {

  public taskNumber:string;

  constructor(
    private cd: ChangeDetectorRef,
    private tasksStore: TasksStoreService,
  ) { }

  ngOnInit() {
  }

  public inputChanged(event){
    console.log("triggered", this.taskNumber);
    this.tasksStore.setTaskNumberFilter(this.taskNumber);
  }

}
