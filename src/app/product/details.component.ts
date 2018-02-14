import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product, fadeInAnimation } from '../shared';
import { MetadataService, Metadata, Option } from '../shared';

@Component({
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProductDetailsComponent implements OnInit {

    product: Product;
    categories: Metadata[];

    constructor(
        private route: ActivatedRoute, 
        private productService: ProductService,
        private metadataService: MetadataService,
        private location: Location) {
    }

    ngOnInit() {
        this.getProduct(this.route.snapshot.params['url']);
    } 

    getProduct(url: string) {
        this.productService.getProduct(url)
            .subscribe( result => {
                if (result) {
                    let group = this.getAttributeValue(result, 'architecture');
                    this.product = result;
                
                    this.getCategories(group);
                }
            });
    }

    getCategories(group: string) {
        if (group) {
            this.metadataService.searchMetadata(group)
                .subscribe( result => this.categories = result._embedded.metadataResourceList);
        }
    }

    getProductOptionsByCategory(category: string) {
        const matchingOptions = new Array<Option>();

        for (let currentOption of this.product.options) {
            const optiontags = currentOption.tags;
            if (optiontags && optiontags.length > 0) {
                if (optiontags.indexOf(category) > - 1) {
                    matchingOptions.push(currentOption);
                }
            }
        }

        return matchingOptions;
    }


    private getAttributeValue(product: Product, name: string) {
        if (product) {
            for (let current of product.attributes) {
                if (current.name === name) {
                    return current.value;
                }
            }
        }

        return null;
    }

    backClicked() {
        this.location.back();
    }
    

}
