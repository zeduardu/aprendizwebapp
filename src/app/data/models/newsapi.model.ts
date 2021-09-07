export class NewsApi {
    status!: string;
    totalResults!: number;
    articles!: Article[];
}

export class Article {
    source!: object;
    author!: string;
    title!: string;
    description!: string;
    url!: string;
    urlToImage!: string;
    publishedAt!: string;
    content!: string;
}