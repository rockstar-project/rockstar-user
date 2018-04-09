import { Component, Input } from '@angular/core';
import { Architecture } from '../../../../core';

@Component({
    selector: 'app-architecture-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ArchitectureFeatureItemComponent  {
    
    @Input()
    item: Architecture;

    hovering: boolean = false;

}