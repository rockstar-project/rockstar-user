import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Content } from './../models';

@Injectable()
export class ContentService {

  constructor(private httpClient: HttpClient) {}

  getContent(type: string): Observable<Content> {

    if (type) {
      if (type === 'hero') {
         return this.httpClient.get<Content>('assets/data/content/home/hero.json')
          .pipe(catchError(this.handleError));
      } else if (type === 'howitworks') {
        return this.httpClient.get<Content>('assets/data/content/home/howitworks.json')
         .pipe(catchError(this.handleError));
     } 
    }

    return null;
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}