import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './components/posts/posts.component';
import {PostService} from './post.service';
import { PostCardComponent } from './components/post_card/post-card.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import {SharedModule} from '../../shared/shared.module';
import { TemplateFormToCreatePostComponent } from './components/template-form-to-create-post/template-form-to-create-post.component';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    PostComponent,
    CommentComponent,
    CommentsComponent,
    TemplateFormToCreatePostComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    PostsComponent,
    CommentsComponent
  ],
  providers: [PostService]
})
export class PostsModule { }
