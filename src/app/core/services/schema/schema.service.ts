
import {throwError as observableThrowError,  Observable, pipe } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SchemaService {

  constructor(private httpClient: HttpClient) {}

  validateSchema(url: string) {
    return this.httpClient.get('http://online.swagger.io/validator?url=' + url, {
        headers: new HttpHeaders()
            .append('Accept', 'application/json')
            .append('Content-Type', 'application/json')
        })
        .pipe(catchError(this.handleError));
  }

  getSchema(url: string) {
    return this.httpClient.get(`${url}`)
        .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return observableThrowError(err.message || err);
  }

}