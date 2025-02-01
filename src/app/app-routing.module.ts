import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from './features/users/users/users.component';
import {HomeComponent} from './features/home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to home
  { path: 'users',
    loadChildren: () =>
      import("./features/users/users.module").then(m => m.UsersModule)
  },

  { path: 'posts',
    loadChildren:()=>
      import("./features/posts/posts.module").then(m => m.PostsModule) },

  { path: 'home', component:HomeComponent}, // Home route
  // { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
