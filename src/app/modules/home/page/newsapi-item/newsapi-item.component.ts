import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/data/models/newsapi.model';

@Component({
  selector: 'app-newsapi-item',
  templateUrl: './newsapi-item.component.html',
  styleUrls: ['./newsapi-item.component.css']
})

export class NewsApiItemComponent implements OnInit {
  @Input() newsapiArticle!: Article;
  months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  monthName!: string;

  constructor() {
    // do nothing
  }

  ngOnInit(): void {
    // do nothing
  }

  getMonthName(datetime: string): string {
    const date = new Date(datetime);
    return this.months[date.getMonth()];
  }

  getDayNumber(datetime: string): string {
    const date = new Date(datetime);
    return date.getDay().toString();
  }

}
