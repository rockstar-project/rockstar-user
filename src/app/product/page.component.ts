import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductDetails } from '../shared';
import { MetadataService, Metadata, Option } from '../shared';

@Component({
  selector: 'app-product-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class ProductPageComponent implements OnInit {

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
    
    private getAttribute(name: string) {
        if (this.productDetails) {
            for (let current of this.productDetails.attributes) {
                if (current.name === name) {
                    return current;
                }
            }
        }
    }

    private getAttributeValue(name: string) {
        let value = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            value = attribute.value;
        }
        return value;
    }

    private getAttributeTitle(name: string) {
        let title = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            title = attribute.title;
        }
        return title;
    }

    private getAttributeVersion(name: string) {
        let version = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            version = attribute.version;
        }
        return version;
    }

    private  getAttributeImage(name: string) {
        let image = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            image = attribute.image;
        }
        return image;
    }

}
