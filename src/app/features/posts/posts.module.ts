import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {PostService} from './post.service';
import { PostCardComponent } from './posts/post_card/post-card.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './posts/post/post.component';
import { CommentComponent } from './posts/comments/comment/comment.component';
import { CommentsComponent } from './posts/comments/comments.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    PostsComponent,
    PostCardComponent,
    PostComponent,
    CommentComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  exports: [
    PostsComponent,
    CommentsComponent
  ],
  providers: [PostService]
})
export class PostsModule { }
