import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from "./user.model"
import {Post} from '../posts/models/post.model';
@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }
  baseUrl: string = "https://jsonplaceholder.typicode.com/";
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "users");
  }
  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/users/${id}`;
    const params = new HttpParams().set('id', id);
    return this.http.get<User>(url, {params: params});
  }

  getUserPosts(userId: number): Observable<Post[]> {
    const url = `${this.baseUrl}/posts/`;
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Post[]>(url, { params });
  }

}
