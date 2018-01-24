import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProductSearchResult, ProductSearchCriteria, ProductDetails, ProductInfo } from '../../../shared';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  searchProducts(criteria: ProductSearchCriteria): Observable<ProductSearchResult> {
    if (criteria) {
      if (criteria.featured && criteria.state) {
        return this.httpClient.get<ProductSearchResult>('assets/data/product/active_featured.json')
            .pipe(catchError(this.handleError));
      } else {
        return this.httpClient.get<ProductSearchResult>('assets/data/product/all.json')
            .pipe(catchError(this.handleError));
      }
    }
    
  }

  getProduct(url: string): Observable<ProductDetails> {
    return this.httpClient.get<ProductSearchResult>('assets/data/product/details.json')
            .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

}