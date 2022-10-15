import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoDoneComponent } from './to-do-list/to-do-done/to-do-done.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [
  {
    path: 'todos',
    component: ToDoListComponent, children: [
      {
        path: 'add',
        component: ToDoFormComponent
      },
      {
        path: 'done',
        component: ToDoDoneComponent,
        outlet: 'donelink'

      }


    ]},

    {
      path: '',
      redirectTo: 'todos',
      pathMatch: 'full'
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
