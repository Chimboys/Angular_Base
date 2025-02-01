import {Component, Input} from '@angular/core';
import {User} from '../../user.model';
import {UsersService} from '../../user.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../posts/posts/models/post.model';

@Component({
  selector: 'app-user',
  standalone: false,

  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userId : number | null = null;
  posts:Post [] = [];

  user: User | null = null ;
  constructor(
    private _usersService : UsersService,
    private _route: ActivatedRoute
  ){}

  ngOnInit() {
    if (this.userId === null) {
      this._route.params.subscribe(params => {
        this.userId = +params['id'];
      })
    }
    this.fetchUser();
    this._usersService.getUserPosts(this.userId!).subscribe(params => {
      this.posts = params;
      console.log(this.posts);
    })
  }

  fetchUser(): void {
    //Todo works in cases if userID is actually messed up
    this._usersService.getUserById(this.userId!).subscribe({
      next: (data: User) => {
        this.user = data;
      },
      error: (error: Error) => {
        console.log(error);
      },
      complete: () => {
        console.log('User fetch completed');
        console.log(this.user);
      }
    });
  }

}
