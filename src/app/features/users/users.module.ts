import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {PostService} from '../posts/post.service';
import {UsersService} from './user.service';
import { UserComponent } from './users/user/user.component';
import {SharedModule} from "../../shared/shared.module";
import { UserCardComponent } from './users/user-card/user-card.component';
import { UsersRoutingModule } from './users-routing.module';
import {PostsModule} from '../posts/posts.module';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserCardComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        UsersRoutingModule,
        PostsModule
    ],
  exports: [
    UsersComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
