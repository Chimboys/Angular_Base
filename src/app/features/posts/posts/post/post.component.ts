import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post | null = null; // Initialize as null

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Extract postId from route parameters
    if (this.post === null){
      this._route.params.subscribe(params => {
        const postId = +params['id']; // Convert the string to a number
        this.fetchPost(postId); // Fetch the post using the extracted postId
      });
    }
  }

  fetchPost(postId: number) {
    // Fetch the post using the provided postId
    this._postService.getPostByPostId(postId).subscribe(post => {
      this.post = post; // Assign the emitted Post object to this.post
    });
  }
}
