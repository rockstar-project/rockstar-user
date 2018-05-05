import { Component, Input, HostBinding, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { trigger, state, style, animate, transition, group, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss'],
    animations: [
        trigger('overlay', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('* => *', animate('.5s'))
          ])
    ]
})

export class MediaComponent implements OnChanges {

    @Input()
    item: any;

    @Output()
    onclick: EventEmitter<any>;

    hovering = false;

    ngOnChanges(changes: SimpleChanges) {
        const itemChange: SimpleChange = changes.item;
        if (itemChange) {
            this.item = itemChange.currentValue;
        }
    }

    onClick() {
       this.onclick.emit(this.item);
    }

    onMouseOver(event) {
        this.hovering = true;
    }
}