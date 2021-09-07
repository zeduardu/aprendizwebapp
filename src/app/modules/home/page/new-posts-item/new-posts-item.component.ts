import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/data/models/author.model';
import { Post } from './../../../../data/models/post.model';

@Component({
  selector: 'app-new-posts-item',
  templateUrl: './new-posts-item.component.html',
  styleUrls: ['./new-posts-item.component.css']
})
export class NewPostsItemComponent implements OnInit {
  @Input() post!: Post;
  months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  monthName!: string;

  constructor() {
    // do nothing
  }

  ngOnInit(): void {
    // do nothing
  }

  getMonthName(timeUnix: number): string {
    const date = new Date(timeUnix);
    return this.months[date.getMonth()];
  }

  getDayNumber(timeUnix: number): string {
    const date = new Date(timeUnix);
    return date.getDay().toString();
  }

  getAuthorsName(authors: Author[]): string{
    if (authors.length > 1) {
      return 'Vários';
    }
    return authors[0].name;
  }

}
