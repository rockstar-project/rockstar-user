import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Metadata, MetadataResultSet } from './../models';

@Injectable()
export class MetadataService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Array<Metadata>> {
    return this.httpClient
      .get<MetadataResultSet>(`${environment.api_url}/metadata/search`, { 
        headers: new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      })
      .pipe(
          catchError(this.handleError)
      );
  }

  searchMetadata(group: string): Observable<MetadataResultSet> {
    
    return this.httpClient
      .get<MetadataResultSet>(`${environment.api_url}/metadata/search?group=${group}`, { 
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