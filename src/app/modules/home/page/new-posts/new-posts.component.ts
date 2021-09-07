import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/data/models/post.model';
import { PostService } from 'src/app/data/service/post.service';
import { NewsApiService } from 'src/app/data/service/newsapi.service';
import { Article } from 'src/app/data/models/newsapi.model';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.css']
})
export class NewPostsComponent implements OnInit {
  posts: Post[] = [];
  newsapiArticle: Article[] = [];

  constructor(
    private postService: PostService,
    private newsapiService: NewsApiService,
  ) { }

  ngOnInit(): void {
    this.showNews();
  }

  showPosts(): void {
    this.postService.browse().subscribe(posts => this.posts = posts);
  }

  showNews(): void {
    this.newsapiService.browse().subscribe(newsapi => this.newsapiArticle = newsapi.articles);
  }
}
