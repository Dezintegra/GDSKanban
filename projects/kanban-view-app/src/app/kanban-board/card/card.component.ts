import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../store/model/task.model';
import { TasksStoreService } from '../../store/services/store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public task:Task;

  constructor(private store: TasksStoreService) { }

  ngOnInit() {
  }

  public editTask() {
    this.store.editTask(this.task);
  }
}
