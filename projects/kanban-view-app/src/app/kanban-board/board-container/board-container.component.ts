import { Component, OnInit } from '@angular/core';

declare var gapi: any;

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
})
export class BoardContainerComponent implements OnInit {

  public data:string;

  constructor() { }

  ngOnInit() {
  }

  public getData(){
    this.listMajors();
  }

  private listMajors() {
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1AlihhnzwKhJLWxeCYY3eTwBfozpUGkS_VeDJk6AZrco',
      range: 'Рефакторинг!A3:I200',
    }).then((response) => {
      this.data = response.result.values;
    });
  }
}
