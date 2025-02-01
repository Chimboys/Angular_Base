import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../post.service';
import {Comment} from '../models/comment.model';

@Component({
  selector: 'app-comments',
  standalone: false,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input() postId:number|null = null;

  comments:Comment[] = [];
  constructor(private _postService : PostService) {}

  ngOnInit() { // Correct method name
    this._postService.getCommentsForPost(this.postId!).subscribe((data: Comment[]) => {
        this.comments = data;
      })
    }




}
