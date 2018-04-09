import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Content, Plans } from './';

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
      } else if (type === 'features') {
        return this.httpClient.get<Content>('assets/data/content/home/features.json')
         .pipe(catchError(this.handleError));
     } else if (type === 'termsofuse') {
        return this.httpClient.get<Content>('assets/data/content/home/legal/termsofuse.json')
        .pipe(catchError(this.handleError));
      } else if (type === 'privacypolicy') {
        return this.httpClient.get<Content>('assets/data/content/home/legal/privacypolicy.json')
        .pipe(catchError(this.handleError));
      } else if (type === 'license') {
        return this.httpClient.get<Content>('assets/data/content/home/legal/license.json')
        .pipe(catchError(this.handleError));
      } else if (type === 'faq') {
        return this.httpClient.get<Content>('assets/data/content/home/legal/faq.json')
        .pipe(catchError(this.handleError));
      } 
    }

    return null;
  }

  getPricingPlans(): Observable<Plans> {
      return this.httpClient.get<Plans>('assets/data/content/home/pricing.json')
         .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}