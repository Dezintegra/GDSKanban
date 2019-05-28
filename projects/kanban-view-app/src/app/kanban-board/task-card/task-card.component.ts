import { MatDialog } from '@angular/material';
import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TaskCardDialogComponent } from './task-card-dialog.component';
import { Task } from '../../store/model/task.model';
import { TasksStoreService } from '../../store/services/store.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'task-card',
    template: '<ng-container><ng-container>'
})
export class DialogOverviewExample implements AfterViewInit {

    constructor(
        private store: TasksStoreService,
        private cd: ChangeDetectorRef,
        public dialog: MatDialog) { }

    ngAfterViewInit(): void {
        this.store.tasksForEdit$.pipe( filter(_ => _ != null))
            .subscribe( task => {
                console.log("task", task); 
                this.openDialog(task);                
            });
    }

    openDialog(task: Task): void {
        const dialogRef = this.dialog.open(TaskCardDialogComponent, {
            width: '90%',
            data: task
        });

        dialogRef.afterOpened().subscribe(() => {
            this.cd.detectChanges();
        });

        dialogRef.afterClosed().subscribe(result => {
            this.store.updateTask(task);
        });
    }
}