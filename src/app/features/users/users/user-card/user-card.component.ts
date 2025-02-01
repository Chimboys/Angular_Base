import {Component, Input} from '@angular/core';
import {User} from '../../user.model';

@Component({
  selector: 'app-user-card',
  standalone: false,

  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({required:true}) user!: User;
}
