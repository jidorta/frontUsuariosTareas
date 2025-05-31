import { Routes } from '@angular/router';
import {UserListComponent} from '../modules/users/user-list/user-list.component';
import { TaskListComponent } from '../modules/tasks/task-list/task-list.component';

export const routes: Routes = [
  {path: '',redirectTo:'usuarios', pathMatch:'full'},
  {path: 'usuarios',component:UserListComponent},
  {path:'tareas',component:TaskListComponent}

];
