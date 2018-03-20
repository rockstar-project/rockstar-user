import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product, fadeInAnimation } from '../core';
import { MetadataService, Metadata, Option } from '../core'
import { UtilsService } from '../core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProductComponent implements OnInit {

    product: Product;
    categories: Metadata[];

    constructor(
        private router: Router,
        private route: ActivatedRoute, 
        private productService: ProductService,
        private utilsService: UtilsService,
        private location: Location) {
    }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['id']);
    } 

    getProduct(id: string) {
        this.productService.getProduct(id)
            .subscribe( result => this.product = result);
    }

    onExit() {
        this.location.back();
    }

}
