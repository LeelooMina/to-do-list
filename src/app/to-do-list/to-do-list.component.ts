import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoService } from '../shared/to-do.service';
import { ToDo } from '../shared/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDoList: ToDo[] = [
  ];

  
  rLink = '/todos/add';
  btnName = "Add more tasks"

  @Output() toDoCurrent = new EventEmitter<string>();


  constructor(public toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoList = this.toDoService.getToDo();
    this.toDoService.toDoListChanged.subscribe((todos) => {
      this.toDoList = todos;
    })
    // this.toDoListDone = this.toDoService.getDoneToDos();
    // this.toDoService.toDoDoneChanged.subscribe((todos) => {
    //   this.toDoListDone = todos;
    //   console.log(this.toDoListDone);
    // })
    // console.log(this.toDoListDone);
  }

  changeButton(){
    if(this.rLink === '/todos/add'){
      this.rLink = '/todos';
      this.btnName = 'Stop adding tasks';
    } else {
      this.rLink = '/todos/add';
      this.btnName = "Add more tasks";
    }

  }

}
