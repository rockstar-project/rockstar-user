
import { throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProductSearchResult, ProductSearchCriteria, Product, Media } from './';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  searchProducts(criteria: ProductSearchCriteria): Observable<ProductSearchResult> {
      let params = new HttpParams();
     
      if (criteria) {
        if (criteria.organization && criteria.organization.length > 0) {
          params = params.append('organization', criteria.organization);
        }
        if (criteria.state && criteria.state.length > 0) {
          params = params.append('state', criteria.state);
        } 
        if (!criteria.featured) {
          params = params.append('featured', '' + false);
        } else {
          params = params.append('featured', '' + criteria.featured);
        }
        if (criteria.visibility && criteria.visibility.length > 0) {
          params = params.append('visibility', criteria.visibility);
        } 
        if (criteria.architecture && criteria.architecture.length > 0) {
          params = params.append('architecture', criteria.architecture);
        } 
       
        params = params.append('size', '' + criteria.size);
        params = params.append('page', '' + criteria.page);
      }

      let headers = new HttpHeaders()
              .append('Accept', 'application/json')
              .append('Content-Type', 'application/json')

      return this.httpClient
        .get<ProductSearchResult>(`${environment.api_url}/products/search`, { params: params, headers:  headers } )
        .pipe(
            catchError(this.handleError)
        );
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient
      .get<Product>(`${environment.api_url}/products/${id}`, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductMedia(id: string): Observable<Array<Media>> {
    return this.httpClient
      .get<Array<Media>>(`${environment.api_url}/products/${id}/mediaitems`, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return observableThrowError(err.message || err);
  }

}
