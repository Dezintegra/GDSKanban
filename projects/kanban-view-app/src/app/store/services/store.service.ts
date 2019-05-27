import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';
import { BehaviorSubject, timer  } from 'rxjs';
import { filter } from 'rxjs/operators';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {

  private userIsAuthentificated = false;
  private allTasks: Map<string, Task>;
  private responsibleFilterMask: string[] = [];

  public responsibles$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public tasksUpdated$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(null);
  private timerSubject$ = timer(0,30000);

  constructor() {
    this.allTasks = new Map<string, Task>();    
    this.timerSubject$
      .pipe(filter( ()=> this.userIsAuthentificated))
      .subscribe( () => {
        this.getData();
      });
  }

  public setResponsibleFilter(responsibleFilterMask: string[]) {
    this.responsibleFilterMask = responsibleFilterMask;
    this.pushFilteredDate();

  }

  public setAuthentificated(){
    this.userIsAuthentificated = true;
  }

  public updateTasks(tasks: any[]) {

    // this.allTasks = 
    
    tasks.forEach(task => {
      const kanbanTask = new Task();

      kanbanTask.id = task[0];
      kanbanTask.title = task[1];
      kanbanTask.description = task[2];
      kanbanTask.responsible = task[7];
      kanbanTask.state = task[6];

      kanbanTask.fieldsData = task;

      this.allTasks.set(kanbanTask.id, kanbanTask);
    });

    this.pushFilteredDate();
  }

  private pushFilteredDate(): void {

    const resultSet = []; 
    this.allTasks.forEach( task => {
      
      if(!task.responsible) return false;

      if(!this.responsibleFilterMask) resultSet.push(task);
      
      //const contains = task.responsible.indexOf(this.responsibleFilterMask) > -1
      let contains = this.responsibleFilterMask.length == 0;

      this.responsibleFilterMask.forEach( responsible => {
        if(contains) return;

        if( task.responsible.indexOf(responsible) > -1){
          contains = true;
        }
      })

      if(contains){
        resultSet.push(task);
      }
    });

    this.tasksUpdated$.next(resultSet);
  }

  public getData(){
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1AlihhnzwKhJLWxeCYY3eTwBfozpUGkS_VeDJk6AZrco',
      range: 'Замечания / вопросы!A3:I2000',
    }).then((response) => {
      this.updateTasks(response.result.values);
    });
  }

  public getResponsibles(){
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1AlihhnzwKhJLWxeCYY3eTwBfozpUGkS_VeDJk6AZrco',
      range: 'Выпадающие списки!C2:C30',
    }).then((response) => {
      console.log("responsibles", response.result.values)
      this.responsibles$.next(response.result.values);
    });
  }
}
