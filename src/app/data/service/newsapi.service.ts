import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsApi } from '../models/newsapi.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor (private http: HttpClient) {}

  browse(): Observable<NewsApi> {        
    return this.http.get<NewsApi>('https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=06377393fc404e42b8870517f8051efa');
  }      
}