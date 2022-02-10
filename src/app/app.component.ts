import { Component, OnInit } from '@angular/core';
import { Card } from "./model/card";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private translate: TranslateService){
    translate.setDefaultLang('nl-NL');
    //translate.use('en');
  }

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
