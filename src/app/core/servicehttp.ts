import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from '../data/models/model';
import { Config } from './config';
import { ICrud } from './icrud.interface';

export abstract class ServiceHTTP<T extends Model> implements ICrud<T>{

  constructor(
    protected type: new() => T,
    protected http: HttpClient,
    public path: string
  ){}
  browse(): Observable<T[]> {
    const url = Config.baseUrlWebApp + this.path;
    return this.http.get<T[]>(url);
  }
  read(id: string): Observable<T> {
    const url = Config.baseUrlWebApp + `${this.path}/${id}`;
    return this.http.get<T>(url);
  }
  add(item: T): Observable<T> {
    const url = Config.baseUrlWebApp + this.path;
    return this.http.post<T>(url, item);
  }
  edit(item: T): Observable<T> {
    const url = Config.baseUrlWebApp + this.path;
    return this.http.post<T>(url, item);
  }
  delete(id: string): Observable<unknown> {
    const url = Config.baseUrlWebApp + `${this.path}/${id}`;
    return this.http.delete(url);
  }
}
