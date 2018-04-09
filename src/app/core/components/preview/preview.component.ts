import { Component, Input, HostBinding } from '@angular/core';
import { Preview } from './preview.model';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})

export class PreviewComponent  {
    
    @Input()
    item: Preview;

}