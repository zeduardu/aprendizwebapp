import { Observable } from 'rxjs';

export interface ICrud<T> {
  browse(): Observable<T[]>;
  read(id: string): Observable<T>;
  add(item: T): Observable<T>;
  edit(item: T): Observable<T>;
  delete(id: string): Observable<unknown>;
}
