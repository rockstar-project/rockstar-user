
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LegalItem } from './legal.model';

@Injectable()
export class LegalService {

  constructor(private httpClient: HttpClient) {}

  getLegalItem(type: string): Observable<LegalItem> {

    if (type) {
      if (type === 'termsofuse') {
         return this.httpClient.get<LegalItem>('assets/data/content/home/legal/termsofuse.json')
          .pipe(catchError(this.handleError));
      } else if (type === 'privacypolicy') {
        return this.httpClient.get<LegalItem>('assets/data/content/home/legal/privacypolicy.json')
        .pipe(catchError(this.handleError));
      } else if (type === 'license') {
        return this.httpClient.get<LegalItem>('assets/data/content/home/legal/license.json')
        .pipe(catchError(this.handleError));
      } else if (type === 'faq') {
        return this.httpClient.get<LegalItem>('assets/data/content/home/legal/faq.json')
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