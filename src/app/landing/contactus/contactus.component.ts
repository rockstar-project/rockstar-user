import { Component } from '@angular/core';
import { fadeInAnimation } from './fadein.animation';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.scss' ],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class ContactUsComponent  {
}