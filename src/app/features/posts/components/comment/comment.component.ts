import {Component, Input} from '@angular/core';
import {Comment} from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  standalone: false,

  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input({required:true}) comment!: Comment;

}
