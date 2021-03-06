import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TasksStoreService } from '../../store/services/store.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-responsible-filter',
  templateUrl: './responsible-filter.component.html',
  styleUrls: ['./responsible-filter.component.css']
})
export class ResponsibleFilterComponent implements OnInit {

  public responsibles: string[];

  public responsibleMask:string[];

  constructor(
    private cd: ChangeDetectorRef,
    private tasksStore: TasksStoreService,
  ) { }

  ngOnInit() {
    this.tasksStore.responsibles$.pipe(filter(_=>_ !=null))
      .subscribe(responsibles => { 
        this.responsibles = responsibles;
        this.cd.detectChanges();
      });
  }

  public inputChanged(event){
    console.log("triggered", this.responsibleMask);
    this.tasksStore.setResponsibleFilter(this.responsibleMask);
  }

}
