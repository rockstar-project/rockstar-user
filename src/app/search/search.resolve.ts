import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { ProductSearchResult, ProductSearchCriteria, Product} from './../core';
import { ProductService } from './../core/';

@Injectable()
export class SearchProductsResolve implements Resolve<ProductSearchResult> {

  constructor(private router: Router, private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductSearchResult> {
    //let architecture = route.paramMap.get('architecture');
    return this.productService.searchProducts(this.productSearchCriteria());
  }

  private productSearchCriteria() {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.organization = 'rockstar';
    searchCriteria.page = 0;
    searchCriteria.size = 50;
    return searchCriteria;
  }

}
