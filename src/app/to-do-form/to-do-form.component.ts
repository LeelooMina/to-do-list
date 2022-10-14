import { Component, ElementRef, OnInit } from '@angular/core';
import { ToDoService } from '../shared/to-do.service';
import { ToDo } from '../shared/todo.model';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  defaultTxValue = "Got something to do?"

  inputToDo: ToDo = {
    action: this.defaultTxValue,
    completed: false
  };



  constructor(public toDoService: ToDoService, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  clearTextBox(){

    this.inputToDo.action = "";

  }


  resetDefaultText(){
    this.inputToDo = {
      action: this.defaultTxValue,
      completed: false
    }
  }

}
