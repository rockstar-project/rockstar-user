import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductDetails } from '../../shared';

@Component({
  selector: 'app-product-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

    productDetails: ProductDetails;

    constructor(private route: ActivatedRoute, private productService: ProductService) {
    }

    ngOnInit() {
        this.getProductDetails(this.route.snapshot.parent.params['url']);
    } 

    getProductDetails(url: string) {
        this.productService.getProduct(url)
            .subscribe( result => this.productDetails = result);
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
