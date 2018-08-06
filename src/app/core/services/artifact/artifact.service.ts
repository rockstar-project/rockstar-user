import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Artifact } from './';

@Injectable()
export class ArtifactService {

  constructor(private http: Http) {}

  createArtifact(artifact: Artifact) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${localStorage.getItem('access_token')}`);

    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${environment.api_url}/artifacts`, artifact, options)
            .pipe(
                map(res => res.headers.get('Location')),
                catchError(this.handleError)
              );
  }

  downloadArtifact(url: string): Observable<Blob> {
    const headers = new Headers();
    headers.append('accept', 'application/zip');
    headers.append('Authorization', `Bearer ${localStorage.getItem('access_token')}`);

    const options = new RequestOptions({ headers: headers, responseType: ResponseContentType.ArrayBuffer });

    return this.http.get(url, options)
          .pipe(
              map(res => new Blob([res['_body']], { type: 'application/zip' })),
              catchError(this.handleError)
          );
  }

  private extractData(res: Response) {
    const body = res.json();
        return body.link || {};
  }

  private handleError(error: any) {
       const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
       console.error(errMsg);
       return Observable.throw(errMsg);
   }
}
