import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../shared';

@Component({
  selector: 'card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {

    @Input()
    items: Array<Product>;
    
    @Output()
    select = new EventEmitter<String>();

    constructor(
        private router: Router, 
     private route: ActivatedRoute) { }

    getFeaturedOption(item: Product) {
        if (item) {
            for (let current of item.options) {
                if (current.featured) {
                    return current;
                }
            }
        }
    }

    getFeaturedOptionImage(item: Product) {
        let featuredOption = this.getFeaturedOption(item);
        if (featuredOption) {
            return featuredOption.image;
        }
        return null;
    }

    getTitle(item: Product, name: string) {
        if (item) {
            for (let current of item.attributes) {
                if (current.name === name) {
                    return current.title;
                }
            }
        }
    }

    getValue(item: Product, name: string) {
        if (item) {
            for (let current of item.attributes) {
                if (current.name === name) {
                    return current.value;
                }
            }
        }
    }

    getImage(item: Product, name: string) {
        if (item) {
            for (let current of item.attributes) {
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
