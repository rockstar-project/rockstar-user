import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { UserProfile } from '../models/auth0.model';

@Injectable()
export class UserService {

  url = 'https://rockstar.auth0.com/api/v2/';

  constructor(private httpClient: HttpClient) {}

  getUserDetails(id: string): Observable<UserProfile> {
    return this.httpClient
      .get<UserProfile>(`${this.url}`, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}