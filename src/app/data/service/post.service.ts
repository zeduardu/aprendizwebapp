import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceHTTP } from '@app/servicehttp';
import { Post } from './../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ServiceHTTP<Post> {

  constructor(http: HttpClient){
    super(Post, http, 'posts' );
  }
}
