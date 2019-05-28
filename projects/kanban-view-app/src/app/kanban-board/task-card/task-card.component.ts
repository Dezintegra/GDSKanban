import { MatDialog } from '@angular/material';
import { Component, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../store/model/task.model';
import { TasksStoreService } from '../../store/services/store.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'task-card',
    templateUrl: './task-card.component.html',
    styleUrls: [`./task-card.component.css`],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskEditFormComponent implements AfterViewInit {

    public dialogIsVisible = false;

    public task: Task;

    public columns: string[];

    constructor(
        private store: TasksStoreService,
        private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        this.store.tasksForEdit$.pipe(filter(_ => _ != null))
            .subscribe(task => {
                this.openDialog(task);
                console.log("on edit");
            });

        this.store.fields$.pipe(filter(_ => _ != null))
            .subscribe(fields => {
                this.columns = fields;
            });
    }

    openDialog(task: Task): void {
        this.task = task;
        this.dialogIsVisible = true;
        this.cd.detectChanges();
    }

    closeDialog(): void {
        this.dialogIsVisible = false;
        this.cd.detectChanges();
    }
}