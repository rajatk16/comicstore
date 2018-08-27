import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Comic } from '../models/comic';

const baseUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ComicService {
  public getComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(baseUrl);
  }
  public getComic(id: string): Observable<Comic> {
    return this.http.get<Comic>(`${baseUrl}/${id}`);
  }
  constructor(private http: HttpClient) { }
}
