import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private toDoList: string[] = [
    "La la",
    "tada",
    "go do stuff"
  ]

  toDoListChanged = new EventEmitter<string[]>;

  getToDo() {
    return this.toDoList.slice();
  }

  removeToDo(index: number){
    this.toDoList.splice(index, 1);
    this.toDoListChanged.emit(this.getToDo());
  }

  addToDo(todo: string){
    this.toDoList.push(todo);
    this.toDoListChanged.emit(this.getToDo());
  }

  constructor() { }
}
