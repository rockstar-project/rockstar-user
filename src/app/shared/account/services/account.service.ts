import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Account } from '../../../shared';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  getAccount(url: string): Observable<Account> {
    return Observable.of(new Account());
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}