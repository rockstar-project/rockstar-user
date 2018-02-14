import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../services';
import { ProductSearchResult, ProductSearchCriteria, Product } from './../models';

@Injectable()
export class ProductsResolver implements Resolve<ProductSearchResult> {

  constructor(private router: Router, private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductSearchResult> {
    let architecture = route.paramMap.get('architecture');;
    return this.productService.searchProducts(this.featuredProductSearchCriteria(architecture));
  }

  private featuredProductSearchCriteria(architecture: string) {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.featured = true;
    searchCriteria.visibility = 'public';
    searchCriteria.state = 'publish'
    searchCriteria.featured = true;
    searchCriteria.architecture = architecture;
    searchCriteria.organization = 'rockstar';
    return searchCriteria;
  }

}