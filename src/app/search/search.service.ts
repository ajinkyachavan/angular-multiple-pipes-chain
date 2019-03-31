import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getCommentsFromJSONPlaceholder() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
