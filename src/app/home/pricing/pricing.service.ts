import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Plans } from './pricing.model';

@Injectable()
export class PricingService {

  constructor(private httpClient: HttpClient) {}

  getPricingPlans(): Observable<Plans> {
      return this.httpClient.get<Plans>('assets/data/content/home/pricing.json')
         .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}