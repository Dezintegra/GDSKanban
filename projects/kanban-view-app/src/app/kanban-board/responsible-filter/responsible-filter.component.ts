import { Component, OnInit } from '@angular/core';
import { TasksStoreService } from '../../store/services/store.service';

@Component({
  selector: 'app-responsible-filter',
  templateUrl: './responsible-filter.component.html',
  styleUrls: ['./responsible-filter.component.css']
})
export class ResponsibleFilterComponent implements OnInit {

  public responsibleMask:string;

  constructor(
    private tasksStore: TasksStoreService,
  ) { }

  ngOnInit() {
  }

  public inputChanged(event){
    this.tasksStore.setResponsibleFilter(this.responsibleMask);
  }

}
