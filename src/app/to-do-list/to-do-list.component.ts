import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList: string[] = [];

  @Output() toDoCurrent = new EventEmitter<string>();


  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoService.getToDo();
    this.toDoService.toDoListChanged.subscribe((todos) => {
      this.toDoList = todos;
    })
  }

}
