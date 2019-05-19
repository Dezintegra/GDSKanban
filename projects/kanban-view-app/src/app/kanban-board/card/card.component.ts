import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../store/model/task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public task:Task;

  constructor() { }

  ngOnInit() {
  }

}
