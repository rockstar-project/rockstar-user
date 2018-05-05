import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { MicroserviceFeature, Architecture, Runtime, Schema, Capability, Tool } from './../';

@Injectable()
export class MicroserviceService {

  constructor(private httpClient: HttpClient) {}

  getFeatures(): Observable<Array<MicroserviceFeature>> {
    let features = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/features`, { headers: headers })
          .pipe(
              catchError(this.handleError)
        );
  }

  getFeature(slug: string): Observable<MicroserviceFeature> {
      let headers = new HttpHeaders()
      .append('Accept', 'application/hal+json')
      .append('Content-Type', 'application/json');

      return this.httpClient
            .get<any>(`${environment.api_url}/microservices/features/`+slug , { headers: headers })
            .pipe(catchError(this.handleError));
  }

  getArchitectures(): Observable<Array<Architecture>> {
    let architectures = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/architectures`, { headers: headers })
          .pipe(
              catchError(this.handleError)
        );
  }

  getCapabilities(slug: string): Observable<Array<Capability>> {
      let path = 'capabilities';
      if (slug && slug.length > 0) {
          path = path + '/' + slug
      }

      let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

     return this.httpClient
          .get<any>(`${environment.api_url}/microservices/${path}` , { headers: headers })
          .pipe(
              catchError(this.handleError)
        );
  }

  getCapability(slug: string): Observable<Capability> {
      let headers = new HttpHeaders()
      .append('Accept', 'application/hal+json')
      .append('Content-Type', 'application/json');

      return this.httpClient
            .get<any>(`${environment.api_url}/microservices/capabilities/`+slug , { headers: headers })
            .pipe(catchError(this.handleError));
  }

  getRuntimes(): Observable<Array<Runtime>> {
    let runtimes = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/runtimes`, { headers: headers })
          .pipe(
              catchError(this.handleError)
        );
  }

  getSchemas(): Observable<Array<Schema>> {
    let schemas = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/schemas`, { headers: headers })
          .pipe(
              catchError(this.handleError)
        );
  }

  getTools(): Observable<Array<Tool>> {
      let schemas = null;
      let headers = new HttpHeaders()
              .append('Accept', 'application/hal+json')
              .append('Content-Type', 'application/json');
  
      return this.httpClient
            .get<any>(`${environment.api_url}/microservices/tools`, { headers: headers })
            .pipe(
                catchError(this.handleError)
          );
    }


  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
