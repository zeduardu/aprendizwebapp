import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './page/home.component';
import { NewPostsItemComponent } from './page/new-posts-item/new-posts-item.component';
import { NewPostsComponent } from './page/new-posts/new-posts.component';
import { NewsApiItemComponent } from './page/newsapi-item/newsapi-item.component';

@NgModule({
  imports: [CommonModule, HomeRoutes, SharedModule],
  declarations: [HomeComponent, NewPostsComponent, NewPostsItemComponent, NewsApiItemComponent],
})
export class HomeModule {}
