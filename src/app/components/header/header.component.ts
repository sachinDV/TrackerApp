import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  color: string = this.showAddTask ? 'red' : 'green';
  Text: string = this.showAddTask ? 'Add' : 'Close';
  showAddTask?: boolean = true;
  subscription?: Subscription;
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  toggleAddTask(): void {
    console.log('Toggle');
    this.uiService.toggleAddTask();
  }
}
