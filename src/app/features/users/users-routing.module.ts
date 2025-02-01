import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import {UserComponent} from './users/user/user.component';

//url will already be : localhost:4200/posts/
const routes: Routes = [
  { path: '', component:  UsersComponent }, // localhost:4200/posts/
  { path: ':id', component: UserComponent }, // localhost:4200/posts/123
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
