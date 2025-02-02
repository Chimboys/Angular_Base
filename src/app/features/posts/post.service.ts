import {Injectable} from '@angular/core';
import {catchError, filter, map, Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from './models/post.model';
import {Comment} from "./models/comment.model"
import {User} from '../users/user.model';
import {UsersNameAndId} from "./models/UsersNameAndId"

@Injectable()
export class PostService {
  private baseUrl:string = "https://jsonplaceholder.typicode.com/"
  constructor(private http: HttpClient) { }

  public getUsersAndTheirIds(): Observable<UsersNameAndId[]> {
    return this.http.get<User[]>(this.baseUrl + '/users').pipe(
      map(users => users.map(user => ({ id: user.id, name: user.name } as UsersNameAndId))) // Typecast to UsersNameAndId
    );
  }


  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl + "posts");
  }

  public getCommentsForPost(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.baseUrl + "comments").pipe(
      map(comments => comments.filter(comment => comment.postId === postId))
    );
  }
  public getPostByPostId(postId:number):Observable<Post | null>{
    const url = `${this.baseUrl}/posts`;
    const params = new HttpParams().set('id', postId.toString());

    return this.http.get<Post[]>(url, { params }).pipe(
      map(posts => posts[0] || null), // Return the first post or null if no posts are found
      catchError(() => of(null)) // Handle errors gracefully
    );
  }
   public getBaseUrl():string{
    return this.baseUrl;
   }


}
