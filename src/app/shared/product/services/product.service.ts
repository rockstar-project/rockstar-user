import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProductSearchResult, ProductSearchCriteria, Product } from '../../../shared';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  searchProducts(criteria: ProductSearchCriteria): Observable<ProductSearchResult> {
    
      return this.httpClient
        .get<ProductSearchResult>(`${environment.api_url}/products/search?organization=${criteria.organization}&featured=${criteria.featured}&state=${criteria.state}&visibility=${criteria.visibility}&size=${criteria.size}&page=${criteria.page}`, { 
          headers: new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
         })
         .pipe(
            catchError(this.handleError)
        );
  }

  getProduct(url: string): Observable<Product> {
    return this.httpClient
      .get<Product>(`${url}`, {
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