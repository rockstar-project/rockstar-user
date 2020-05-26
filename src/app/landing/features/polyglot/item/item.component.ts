import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Runtime } from '../../../../core';

@Component({
    selector: 'app-polyglot-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class PolyglotFeatureItemComponent  {
    
    @Input()
    item: Runtime;

    @Output()
    clicklanguage = new EventEmitter<Runtime> ();

    onClick() {
        return this.clicklanguage.emit(this.item);
    } 

}