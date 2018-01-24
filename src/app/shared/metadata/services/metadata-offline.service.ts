import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Metadata, MetadataResultSet } from './../models';

@Injectable()
export class MetadataService {

  constructor(private httpClient: HttpClient) {}

  searchMetadata(group: string): Observable<MetadataResultSet> {
    var metadataResult;

    if (group) {
      if (group === 'architecture') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/architectures.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'language') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/languages.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'framework') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/frameworks.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'datastore') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/datastores.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'specification') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/specifications.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'restapi') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/restapi.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'messaging') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/messaging.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'security') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/security.json')
          .pipe(catchError(this.handleError));
      } else if (group === 'monitoring') {
        metadataResult = this.httpClient.get<MetadataResultSet>('assets/data/metadata/monitoring.json')
          .pipe(catchError(this.handleError));
      }
    }

    return metadataResult;
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}