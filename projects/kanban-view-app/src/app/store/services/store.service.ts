import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {

  private tasks: Task[]

  public tasksUpdated$:BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(null);

  constructor() {
    this.tasks = [];
  }

  public updateTasks(tasks:any[]){

    this.tasks = tasks.map(task => {
      const kanbanTask = new Task();

      kanbanTask.id = task[0];
      kanbanTask.title = task[1];
      kanbanTask.description = task[2];
      kanbanTask.responsible = task[7];
      kanbanTask.state = task[6];

      kanbanTask.fieldsData = task;

      return kanbanTask;
    });

    this.tasksUpdated$.next(this.tasks);
  }
}
