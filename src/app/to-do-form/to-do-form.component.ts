import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../shared/to-do.service';
import { ToDo } from '../shared/todo.model';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  inputToDo: ToDo = {
    action: ""
  };

  constructor(public toDoService: ToDoService) { }

  ngOnInit(): void {
  }

}
