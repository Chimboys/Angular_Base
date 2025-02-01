import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {UsersService} from './user.service';
import { UserComponent } from './users/user/user.component';
import {SharedModule} from "../../shared/shared.module";
import { UserCardComponent } from './users/user-card/user-card.component';
import { UsersRoutingModule } from './users-routing.module';
import {PostsModule} from '../posts/posts.module';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



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
    PostsModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
