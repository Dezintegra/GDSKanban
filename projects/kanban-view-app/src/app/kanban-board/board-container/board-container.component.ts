import { Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { TasksStoreService } from '../../store/services/store.service';

declare var gapi: any;

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.css']
})
export class BoardContainerComponent implements OnInit {

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

  public getData(){
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1AlihhnzwKhJLWxeCYY3eTwBfozpUGkS_VeDJk6AZrco',
      range: 'Замечания / вопросы!A3:I2000',
    }).then((response) => {
      this.tasksStore.updateTasks(response.result.values);

      this.cd.detectChanges();
    });
  }

}
