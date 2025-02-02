import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {
  TemplateFormToCreatePostComponent
} from './components/template-form-to-create-post/template-form-to-create-post.component';

//url will already be : localhost:4200/posts/
const routes: Routes = [
  { path: '', component: PostsComponent }, // localhost:4200/posts/
  { path: 'create', component: TemplateFormToCreatePostComponent },
  { path: ':id', component: PostComponent }, // localhost:4200/posts/123

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
