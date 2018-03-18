import { Component, OnInit} from '@angular/core';
import { ProductService, Option} from '../../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  options: Option[];

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService) {}

  ngOnInit() {
    this.getProductOptions(this.route.snapshot.parent.params['id']);
  }

  getProductOptions(id: string) {
    this.productService.getProduct(id)
        .subscribe( result => {
            if (result) {
                this.options = result.options;
            }
        });
    }

}