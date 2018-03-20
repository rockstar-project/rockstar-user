import { Component, Input, Output, EventEmitter, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ExploreCardComponent {

    @Input()
    item: any;

    @Output()
    select: EventEmitter<string> = new EventEmitter<string> ();
   
    /*hovering = false;*/

    /*
    constructor(private el: ElementRef, private renderer: Renderer) {
        // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }*/

    onSelect(event: string) {
        this.select.emit(event);
    }

    /*
    @HostListener('mouseover') onMouseOver() {
        this.hovering = true;    
        let part = this.el.nativeElement.querySelector('.btn-preview');
        this.renderer.setElementStyle(part, 'display', 'block');
    }
    
    @HostListener('mouseout') onMouseOut() {
        this.hovering = false;
        let part = this.el.nativeElement.querySelector('.btn-preview');
        this.renderer.setElementStyle(part, 'display', 'none');
    }*/
  
}
