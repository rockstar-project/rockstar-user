import { Component, Input, Output, EventEmitter, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AttributePipe, OptionPipe, Product } from '../../core';

@Component({
  selector: 'app-search-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class SearchItemComponent {

    @Input()
    item: Product;

    @Output()
    select: EventEmitter<string> = new EventEmitter<string> ();

    constructor(private attributePipe: AttributePipe, private optionPipe: OptionPipe) {}
   
    hovering = false;

    onSelect(event: string) {
        this.select.emit(event);
    }

    getOptionValue(slug: string, name: string) {
        if (slug && this.item) {
            this.optionPipe.transform(this.item.options, slug, name);
        }
    }

    getAttributeValue(slug: string, name: string) {
        if (slug && this.item) {
            this.attributePipe.transform(this.item.attributes, slug, name);
        }
    }

    /*
    @HostListener('mouseover') onMouseOver() {
        this.hovering = true;    
    }
    
    @HostListener('mouseout') onMouseOut() {
        this.hovering = false;
    }*/
  
}
