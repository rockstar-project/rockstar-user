import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Artifact } from './';

@Injectable()
export class ArtifactService {

  constructor(private http: HttpClient) {}

  createArtifact(artifact: Artifact) : Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.post<any>(`${environment.api_url}/artifacts`, artifact, { headers: httpHeaders, observe: 'response' })
            .pipe(
              map(res => res.headers.get('Location')),
              catchError(this.handleError)
            );
  }

  downloadArtifact(url: string): Observable<Blob> {
    if (url) {
      let httpHeaders = new HttpHeaders({
          'Accept': 'application/zip',
          'Content-Type': 'application/zip; charset=utf-8',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        });

      return this.http.get(url, { headers: httpHeaders, responseType: 'arraybuffer' })
            .pipe(
                map(res  =>  new Blob([res], { type: 'application/zip' })),
                catchError(this.handleError)
            );
    }
  }

   private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return observableThrowError(err.message || err);
  }
}
