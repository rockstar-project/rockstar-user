import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductSearchResult, fadeInAnimation } from './../../shared';

@Component({
  selector: 'card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class CardGridComponent implements OnInit, OnDestroy {

    items: ProductSearchResult;
    sub: any;
    
    @Output()
    select = new EventEmitter<String>();

    constructor(
        private router: Router, 
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.items = this.route.snapshot.data['products'];
      });
        
    }

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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSelectProduct(url: string) {
        console.log('product url: ' + url);
        this.router.navigate(['/product', url]);
    }
}
