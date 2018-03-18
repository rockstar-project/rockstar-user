import { Component, Input } from '@angular/core';

@Component({
    selector: 'option-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class OptionCardComponent  {

    @Input()
    item: any;


}
