import { EventEmitter, Injectable } from '@angular/core';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private toDoList: ToDo[] = [
   {
    action: "Wash dishes",
   },
   {
    action: "Mop floor",
   },
   {
    action:  "Mail letter"
   },
   {
    action:  "Buy milk"
   }
  ]

  private toDoDone: ToDo[] = [
    {
      action: " "
    }
  ]

  toDoListChanged = new EventEmitter<ToDo[]>;

  getToDo() {
    return this.toDoList.slice();
  }

  removeToDo(index: number){
    this.toDoList.splice(index, 1);

    this.toDoListChanged.emit(this.getToDo());
  }

  editToDo(index: number){
    this.toDoList.splice(index, 1);
    this.toDoListChanged.emit(this.getToDo());
  }

  finishToDo(index: number){
    this.toDoDone.push(this.toDoList[index]);
    this.toDoList.splice(index, 1);
    this.toDoListChanged.emit(this.getToDo());
  }

  addToDo(todo: ToDo){
    if(todo.action != "Got something to do?" && todo.action != ""){
    this.toDoList.push(todo);
    this.toDoListChanged.emit(this.getToDo())
    }

  }

  constructor() { }
}
