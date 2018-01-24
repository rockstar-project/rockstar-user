import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx' ;

@Injectable()
export class GeneratorService {

  private generatorProviderUrl = 'http://generator.swagger.io/api';

  constructor(private http: Http) {}

  generateCode(url: string, framework: string) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    const input = <any> {
      swaggerUrl: url,
      options: {
        packageName: ''
      }
    };

    return this.http.post(this.generatorProviderUrl + '/gen/servers/' + framework, input, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  downloadCode(url: string): Observable<Blob> {
    const headers = new Headers();
    headers.append('accept', 'application/octet-stream');

    const options = new RequestOptions({ headers: headers, responseType: ResponseContentType.ArrayBuffer });

    return this.http.get(url, options)
              .map(res => new Blob([res['_body']], { type: 'application/octet-stream' }))
              .catch(this.handleError);
  }

  validateSchema(url: string) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://online.swagger.io/validator?url=' + url, options)
        .map(res => {
          console.log(JSON.stringify(res.json()));
        })
        .catch(this.handleError);
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