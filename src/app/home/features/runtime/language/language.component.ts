import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Runtime } from '../../../../core';

@Component({
    selector: 'app-runtime-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})

export class RuntimeLanguageFeatureComponent  {
    
    @Input()
    item: Runtime;

    @Output()
    clicklanguage = new EventEmitter<Runtime> ();

    onClick() {
        return this.clicklanguage.emit(this.item);
    } 

}