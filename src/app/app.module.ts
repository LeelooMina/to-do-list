import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoComponent } from './to-do-list/to-do/to-do.component';
import { AppRoutingModule } from './app-routing.module';
import { ToDoEditComponent } from './to-do-list/to-do-edit/to-do-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    ToDoFormComponent,
    ToDoComponent,
    ToDoEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
