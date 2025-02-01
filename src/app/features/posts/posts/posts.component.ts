import {Component, input, Input} from '@angular/core';
import {Post} from './models/post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: false,

  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  @Input() posts: Post[] | null = null;
  showNavBar:boolean = true;

  constructor(private _postService: PostService, private _router: Router) {
  }

  ngOnInit() {
    // Subscribe to the observable to fetch posts
    if (this.posts === null){
      this._postService.getPosts().subscribe((data: Post[]) => {
        this.posts = data; // Assign the fetched posts to the posts array
      });
    } else {
      this.showNavBar = false;
    }

  }

  redirectToPost(postId:number){
    this._router.navigate(['/posts', postId]);

  }
}
