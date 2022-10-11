import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [
  {
    path: 'todos',
    component: ToDoListComponent, children: [
      {
        path: 'add',
        component: ToDoFormComponent
      }

    ]},

    {
      path: '',
      redirectTo: 'todos',
      pathMatch: 'full'
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
