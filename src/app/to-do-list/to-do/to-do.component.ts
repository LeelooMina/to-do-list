import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/shared/todo.model';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() toDoCurrent: ToDo = {
    action: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
