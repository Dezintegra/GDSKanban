import { Component, OnInit, ChangeDetectorRef, Inject, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TasksStoreService } from '../../store/services/store.service';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../../store/model/task.model';

@Component({
    selector: 'task-card-dialog',
    template: `
  <h1 mat-dialog-title>[{{task.id}}] {{task.title}}</h1>
  <div mat-dialog-content>
    <p>Card content</p>
  </div>
  
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="task" cdkFocusInitial>Ok</button>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardDialogComponent implements AfterViewInit {
    constructor(
        public dialogRef: MatDialogRef<TaskCardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public task: Task) { }


    ngAfterViewInit(): void {
    }
}
