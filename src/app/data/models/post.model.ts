import { Author } from './author.model';
import { Model } from './model';
import { Section } from './section.model';

export class Post extends Model {
    section!: Section;
    title!: string;
    authors!: Author[];
    created!: number;
    updated!: number;
    lead!: string; // chamada para o post
    content!: string;
}
