import { Component, Input } from '@angular/core';
import { Architecture } from '../../../../core';

@Component({
    selector: 'app-microservice-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class MicroserviceFeatureItemComponent  {
    
    @Input()
    item: Architecture;

    hovering: boolean = false;

}