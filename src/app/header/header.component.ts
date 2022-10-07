import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toDoList: string[] = [];


  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoService.getToDo();
    this.toDoService.toDoListChanged.subscribe((todos) => {
      this.toDoList = todos;
    })
  }

}
