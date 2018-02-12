import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductDetails, fadeInAnimation } from '../shared';
import { MetadataService, Metadata, Option } from '../shared';

@Component({
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProductDetailsComponent implements OnInit {

    productDetails: ProductDetails;
    categories: Metadata[];

    constructor(
        private route: ActivatedRoute, 
        private productService: ProductService,
        private metadataService: MetadataService,
        private location: Location) {
    }

    ngOnInit() {
        this.getProductDetails(this.route.snapshot.params['url']);
        this.getCategories();
     } 

    getProductDetails(url: string) {
        this.productService.getProduct(url)
            .subscribe( result => this.productDetails = result);
    }

    getCategories() {
        this.metadataService.searchMetadata('restapi')
            .subscribe( result => this.categories = result._embedded.metadataResourceList);
    }

    getProductOptionsByCategory(category: string) {
        const matchingOptions = new Array<Option>();

        for (let currentOption of this.productDetails.options) {
            const optiontags = currentOption.tags;
            if (optiontags && optiontags.length > 0) {
                if (optiontags.indexOf(category) > - 1) {
                    matchingOptions.push(currentOption);
                }
            }
        }

        return matchingOptions;
    }

    backClicked() {
        this.location.back();
    }
    

}
