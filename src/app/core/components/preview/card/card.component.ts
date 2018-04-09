import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preview-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class PreviewCardComponent  {
    
    @Input()
    item: any;

}