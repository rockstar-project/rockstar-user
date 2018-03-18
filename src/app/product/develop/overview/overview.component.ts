import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../../../core';

@Component({
  selector: 'app-develop-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    product: Product;

    constructor(private route: ActivatedRoute, private productService: ProductService) {
    }

    ngOnInit() {
        this.getProduct(this.route.snapshot.parent.params['id']);
    } 

    getProduct(url: string) {
        this.productService.getProduct(url)
            .subscribe( result => this.product = result);
    }

}
