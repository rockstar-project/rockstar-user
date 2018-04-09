import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { MicroserviceFeature, Architecture, Runtime, Schema, Capability, CapabilityItem, Tool } from './../';

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
              map((resp) => features = resp._embedded.features),
              catchError(this.handleError)
        );
  }

  getArchitectures(): Observable<Array<Architecture>> {
    let architectures = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/architectures`, { headers: headers })
          .pipe(
              map((resp) => architectures = resp._embedded.architectures),
              catchError(this.handleError)
        );
  }

  getCapabilities(): Observable<Array<Capability>> {
    let architectures = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/capabilities`, { headers: headers })
          .pipe(
              map((resp) => architectures = resp._embedded.capabilities),
              catchError(this.handleError)
        );
  }

  getCapabilityItems(slug: string): Observable<Array<Capability>> {
    let architectures = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/capabilities/` + slug + `/items`, { headers: headers })
          .pipe(
              map((resp) => {
                  if (resp._embedded) {
                        architectures = resp._embedded.capabilities;
                  }
              }),
              catchError(this.handleError)
        );
  }

  getRuntimes(): Observable<Array<Runtime>> {
    let runtimes = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/runtimes`, { headers: headers })
          .pipe(
              map((resp) => runtimes = resp._embedded.runtimes),
              catchError(this.handleError)
        );
  }

  getTools(): Observable<Array<Tool>> {
    let runtimes = null;
    let headers = new HttpHeaders()
            .append('Accept', 'application/hal+json')
            .append('Content-Type', 'application/json');

    return this.httpClient
          .get<any>(`${environment.api_url}/microservices/tools`, { headers: headers })
          .pipe(
              map((resp) => runtimes = resp._embedded.tools),
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
              map((resp) => schemas = resp._embedded.schemas),
              catchError(this.handleError)
        );
  }


  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}
