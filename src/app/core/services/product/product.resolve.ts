import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Product} from './product.model';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router: Router, private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    let productId = route.paramMap.get('id');;
    return this.productService.getProduct(productId);
  }

}
