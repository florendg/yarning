import { Component, OnInit } from '@angular/core';
import { Card } from "./model/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  task: Card = {
    title: 'Task 1',
    description: 'This is a demo card'
  };

  tasks: Card[] = [];

  title = 'yarning';

  ngOnInit(): void {
    this.tasks.push(this.task);
    this.tasks.push({
      title: 'Second Card',
      description: 'A Second card'
    });
  }


}
