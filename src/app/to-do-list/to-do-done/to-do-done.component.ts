import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/shared/to-do.service';
import { ToDo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-to-do-done',
  templateUrl: './to-do-done.component.html',
  styleUrls: ['./to-do-done.component.css']
})
export class ToDoDoneComponent implements OnInit {
  toDoList: ToDo[] = [
  ];


  constructor(public toDoService: ToDoService){

  }

  ngOnInit(): void {
    this.toDoList = this.toDoService.getToDo();
    this.toDoService.toDoListChanged.subscribe((todos) => {
      this.toDoList = todos;
    })
  }

}
