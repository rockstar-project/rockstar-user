import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'option-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class OptionCardComponent implements OnChanges {

    @Input()
    item: any;

    ngOnChanges(changes: SimpleChanges) {
        const itemChange: SimpleChange = changes.item;
        if (itemChange) {
            this.item = itemChange.currentValue;
        }
    }
}
