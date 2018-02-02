import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductInfo } from 'app/shared';

@Component({
    selector: 'product-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class ProductCardComponent  {

    @Input()
    item: ProductInfo;
    @Output()
    select = new EventEmitter<String>();

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    getTitle(name: string) {
        if (this.item) {
            for (let current of this.item.attributes) {
                if (current.name === name) {
                    return current.title;
                }
            }
        }
    }

    getValue(name: string) {
        if (this.item) {
            for (let current of this.item.attributes) {
                if (current.name === name) {
                    return current.value;
                }
            }
        }
    }

    getImage(name: string) {
        if (this.item) {
            for (let current of this.item.attributes) {
                if (current.name === name) {
                    return current.image;
                }
            }
        }
    }



    onSelect(value: string) {
        this.router.navigate(['product', value]);
    }
}
