import { Model } from './model';

export class Contact extends Model {
  name!: string;
  email!: string;
  message!: string;
}