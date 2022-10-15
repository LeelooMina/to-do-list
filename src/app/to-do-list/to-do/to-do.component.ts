import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/shared/to-do.service';
import { ToDo } from 'src/app/shared/todo.model';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input() toDoIndex!: number;

  @Input() toDoCurrent: ToDo = {
    action: '',
    completed: false
  };

  constructor(public toDoService: ToDoService) { }

  clickPrompt(){
    let action = window.prompt("Edit your task:", this.toDoCurrent.action);
    if(action != null){
    this.toDoService.editToDo(this.toDoIndex, action)
    }
  }

  ngOnInit(): void {
  }

}
