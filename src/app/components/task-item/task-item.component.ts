import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    id: 12,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  };
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(tsk: Task) {
    this.onDeleteTask.emit(tsk);
  }

  onToggle(tsk: Task) {
    this.onToggleReminder.emit(tsk);
  }
}
