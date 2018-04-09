import { Component } from '@angular/core';
import { fadeInAnimation } from './fadein.animation';

@Component({
    selector: 'app-home-enterprise',
    templateUrl: './enterprise.component.html',
    styleUrls: ['./enterprise.component.scss' ],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class EnterpriseComponent  {
}