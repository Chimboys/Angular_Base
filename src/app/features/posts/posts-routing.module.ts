import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './posts/post/post.component';

//url will already be : localhost:4200/posts/
const routes: Routes = [
  { path: '', component: PostsComponent }, // localhost:4200/posts/
  { path: ':id', component: PostComponent }, // localhost:4200/posts/123
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
