import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksStoreService } from './services/store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TasksStoreService
  ]
})
export class StoreModule { }
