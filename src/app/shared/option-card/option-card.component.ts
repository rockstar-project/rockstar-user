import { Component, Input } from '@angular/core';
import { Metadata } from 'app/shared';

@Component({
    selector: 'option-card',
    templateUrl: './option-card.component.html',
    styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent  {

    @Input()
    item: Metadata;


}
