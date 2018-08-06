
import { throwError as observableThrowError,  Observable, of, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Account, PaymentTransaction } from './account.model';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  getAccount(url: string): Observable<Account> {
    return of(new Account());
  }

  getAccountPayments(email: string): Observable<Array<PaymentTransaction>> {
    return of([
      {
        "reference_number": "R9S1B4AA",
        "amount": "99",
        "currency": "$",
        "date": "2018-02-14",
        "method": "Visa (xxx-123)",
        "receipt": ""
      },
      {
        "reference_number": "0H28QE6R",
        "amount": "99",
        "currency": "$",
        "date": "2018-01-14",
        "method": "Visa (xxx-123)",
        "receipt": ""
      },
      {
        "reference_number": "KY68GXD4",
        "amount": "99",
        "currency": "$",
        "date": "2017-12-15",
        "method": "Visa (xxx-123)",
        "receipt": ""
      }
    ])
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return observableThrowError(err.message || err);
  }

}