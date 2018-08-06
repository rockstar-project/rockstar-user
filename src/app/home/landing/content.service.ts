
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Content } from './content.model';

@Injectable()
export class ContentService {

  constructor(private httpClient: HttpClient) {}

  getContent(type: string): Observable<Content> {

    if (type) {
      if (type === 'hero') {
         return this.httpClient.get<Content>('assets/data/content/home/landing/hero.json')
          .pipe(catchError(this.handleError));
      } else if (type === 'howitworks') {
        return this.httpClient.get<Content>('assets/data/content/home/landing/howitworks.json')
         .pipe(catchError(this.handleError));
      } 
    }

    return null;
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return observableThrowError(err.message || err);
  }

}