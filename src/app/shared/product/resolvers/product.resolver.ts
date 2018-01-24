import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './../services';
import { ProductSearchResult, ProductSearchCriteria } from './../models';

@Injectable()
export class ProductsResolver implements Resolve<ProductSearchResult> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductSearchResult> {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.featured = false;
    searchCriteria.state = 'publish';
    searchCriteria.organization = 'rockstar';
    return this.productService.searchProducts(searchCriteria);
  }

}