import { Component } from '@angular/core';
import {UsersService} from '../user.service';
import {User} from '../user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,

  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(
    private _userService: UsersService,
    private _router: Router
  ) { }
  users: User[] = [];
  ngOnInit() {
    this._userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    })
  }
  redirectToUser(userId:number){
    this._router.navigate(['users',userId]);
  }
}
