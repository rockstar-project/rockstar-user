import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GeneratorService {

  private generatorProviderUrl = 'http://generator.swagger.io/api';

  constructor(private httpClient: HttpClient) {}

  generateCode(url: string, framework: string) {
    const input = <any> {
        swaggerUrl: url,
        options: {
          packageName: ''
        }
      };

    return this.httpClient
      .post(`${this.generatorProviderUrl}/gen/servers/${framework}`, input, { 
        headers: new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          //.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      })
      .pipe(
          catchError(this.handleError)
      );
  }

  downloadCode(url: string): Observable<Blob> {
      console.log('url: ' + url);
    return this.httpClient
        .get(`${url}`, { 
            responseType: 'arraybuffer',
            observe: 'response',
            headers: new HttpHeaders()
                .set('Accept', 'application/octet-stream')
                //.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      })
    .map(res => new Blob([res['_body']], { type: 'application/octet-stream' }))
    .pipe(
        catchError(this.handleError)
    );
  }

  validateSchema(url: string) {
    return this.httpClient.post('http://online.swagger.io/validator?url=' + url, { 
        headers: new HttpHeaders()
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
      })
     .catch(this.handleError);
  }

   private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}