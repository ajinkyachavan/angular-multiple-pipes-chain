import { Comments } from './comments.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  numberOfClicksSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  numberOfClicks$ = this.numberOfClicksSubject.asObservable();

  commentsSubject: BehaviorSubject<Comments[]> = new BehaviorSubject<Comments[]>(null);
  comments$ = this.commentsSubject.asObservable();
  comments = [];

  constructor(
    private http: HttpClient
  ) { 
    this.initCommments();
  }

  initCommments() {
    this.getCommentsFromJSONPlaceholder()
      .subscribe(
        (res: Comments[]) => {
          this.comments = res;
          this.commentsSubject.next(res);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  setNumberOfClicks(clicks: number) {
    this.numberOfClicksSubject.next(clicks);
  }

  setComments(comments: Comments[]) {
    this.commentsSubject.next(comments);
  }

  getCommentsFromJSONPlaceholder() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
