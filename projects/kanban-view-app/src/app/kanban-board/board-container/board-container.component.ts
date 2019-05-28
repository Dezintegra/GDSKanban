import { Component, OnInit, Output, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TasksStoreService } from '../../store/services/store.service';


@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardContainerComponent implements OnInit, AfterViewInit {
  
  

  public states =[
    "Открыто",
    "Повторно",
    "В работе",
    "Требуется уточнение",
    "Отложено",
    "Заблокировано",
    "Исправлено",
    "Требуется ревью на DEV",
    "Перенесено на TEST",
    "Протестировано ГБК на TEST",
    "Протестировано ВТБ на TEST",
    "Перенесено на PROD",
    "Закрыто",
    "Снято",
  ];

  constructor(
    private tasksStore: TasksStoreService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    
  }

  public userAuthentificated(){

    this.tasksStore.setAuthentificated();

    this.tasksStore.getData();

    this.tasksStore.getResponsibles();

    this.tasksStore.getFields();

    this.cd.detectChanges();
  }

}
