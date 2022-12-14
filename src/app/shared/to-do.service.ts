import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private toDoList: ToDo[] = [
   {
    action: "Wash dishes",
    completed: false
   },
   {
    action: "Mop floor",
    completed: false
   },
   {
    action:  "Mail letter",
    completed: false

   },
   {
    action:  "Buy milk",
    completed: false
   }
  ]



  toDoListChanged = new Subject<ToDo[]>;


  getToDo() {
    return this.toDoList.slice();
  }

  isDone(){
    return this.toDoList.filter(todo => todo.completed === true)
  }

  isDone2(){
    return this.toDoList.filter(todo => todo.completed === false)
  }

  removeToDo(index: number){
    this.toDoList.splice(index, 1);

    this.toDoListChanged.next(this.getToDo());
  }

  editToDo(index: number, action: string){

    this.toDoList[index].action = action;
    this.toDoListChanged.next(this.getToDo());
  }

  finishToDo(index: number){
    this.toDoList[index].completed = true;

    // this.toDoDone.push(todo);
    // this.toDoList.splice(index, 1);
    this.toDoListChanged.next(this.getToDo());

  }

  unFinishToDo(index: number){
    this.toDoList[index].completed = false;

    // this.toDoDone.push(todo);
    // this.toDoList.splice(index, 1);
    this.toDoListChanged.next(this.getToDo());

  }

  addToDo(todo: ToDo){
    if(todo.action != "Got something to do?" && todo.action != ""){
    this.toDoList.push(todo);
    this.toDoListChanged.next(this.getToDo())
    }

  }

  constructor() { }
}
