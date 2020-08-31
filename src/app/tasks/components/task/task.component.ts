import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() delete = new EventEmitter()
  @Output() edit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  editClicked() {
    this.edit.emit(this.task);
  }

  deleteClicked() {
    this.delete.emit(this.task);
  }
}
