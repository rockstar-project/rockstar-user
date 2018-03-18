import { Component, OnInit} from '@angular/core';
import { ProductService, Product, Attribute, AttributePipe} from '../../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.scss']
})
export class SpecificationComponent implements OnInit {

  product: Product;
  format: string;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private attributePipe: AttributePipe) {}

  ngOnInit() {
    this.getProduct(this.route.snapshot.parent.params['id']);
  }

  getProduct(id: string) {
    this.productService.getProduct(id)
        .subscribe( result => {
            if (result) {
                this.format = this.attributePipe.transform(result.attributes, 'specification', 'value');
                this.product = result;
            }
        });
    }

}
