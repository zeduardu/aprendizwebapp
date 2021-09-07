import { Model } from './model';

export class ContactMessage extends Model {
  name!: string;
  email!: string;
  message!: string;
}