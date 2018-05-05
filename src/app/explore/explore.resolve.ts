import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { ProductSearchResult, ProductSearchCriteria, Product} from './../core';
import { ProductService } from './../core';

@Injectable()
export class ExploreProductsResolve implements Resolve<ProductSearchResult> {

  constructor(private router: Router, private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductSearchResult> {
    //let architecture = route.paramMap.get('architecture');;
    return this.productService.searchProducts(this.featuredProductSearchCriteria());
  }

  private featuredProductSearchCriteria() {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.visibility = 'public';
    searchCriteria.featured = true;
    searchCriteria.organization = 'rockstar';
    return searchCriteria;
  }

}
