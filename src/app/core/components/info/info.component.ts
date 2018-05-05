import { Component, Input } from '@angular/core';

@Component({
    selector: 'info-box',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss' ]
})

export class InfoComponent  {

   @Input()
   item: any;
}