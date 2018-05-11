import { Component, Input, OnChanges, SimpleChanges, SimpleChange, HostListener} from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'option-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [
        trigger('overlay', [
            state('true' , style({ opacity: 0.95 })),
            state('false', style({ opacity: 0, transform: 'translateY(50px)' })),
            transition('false => true', animate('.5s ease-out')),
            transition('true => false', animate('.5s ease-in'))
          ])
    ]
})
export class OptionCardComponent implements OnChanges {

    @Input()
    item: any;

    hovering: boolean = false;

    ngOnChanges(changes: SimpleChanges) {
        const itemChange: SimpleChange = changes.item;
        if (itemChange) {
            this.item = itemChange.currentValue;
        }
    }

    @HostListener('mouseover') 
    onMouseOver() {
        this.hovering = true;    
    }
    
    @HostListener('mouseout') 
    onMouseOut() {
        this.hovering = false;
    }
}