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

    @HostBinding('class.card-outline-primary')private ishovering: boolean;
   
    constructor(private el: ElementRef,
        private renderer: Renderer) {}

    @HostListener('mouseover') onMouseOver() {
        let part = this.el.nativeElement.querySelector('.card-text');
        
        this.renderer.setElementStyle(part, 'display', 'block');
        this.ishovering = true;
    }
    
    @HostListener('mouseout') onMouseOut() {
        let part = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setElementStyle(part, 'display', 'none');
        this.ishovering = false; 
    }

    onSelect(event: string) {
        this.select.emit(event);
    }
  
}
