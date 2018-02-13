import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../shared/';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent  {

    @Input()
    item: Product;
    @Output()
    select = new EventEmitter<String>();

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    getFeaturedOption() {
        if (this.item) {
            for (let current of this.item.options) {
                if (current.featured) {
                    return current;
                }
            }
        }
    }
    
    getFeaturedOptionImage() {
        let featuredOption = this.getFeaturedOption();
        if (featuredOption) {
            return featuredOption.image;
        }
        return null;
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
