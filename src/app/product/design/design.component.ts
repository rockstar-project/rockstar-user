import { Component, OnInit, OnDestroy} from '@angular/core';
import { ProductService, Product, Attribute, AttributePipe} from '../../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit, OnDestroy {

  sub: any;
  product: Product;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private productService: ProductService,
    private attributePipe: AttributePipe) {}

  ngOnInit() {
    this.id = this.route.snapshot.parent.params['id'];
    this.sub = this.route.params.subscribe(params => {
        this.product = this.route.snapshot.data['product'];
   });
    // this.getProduct();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProduct() {
    this.productService.getProduct(this.id)
        .subscribe( result => {
            if (result) {
                this.product = result;
            }
        });
    }

  showOptions() {
    this.router.navigateByUrl('/product/' + this.id + '/(design:options//develop:overview)');
  }

  showSpec() {
    this.router.navigateByUrl('/product/' + this.id + '/(design:spec//develop:overview)');
  }

}
