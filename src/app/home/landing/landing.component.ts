import { Component } from '@angular/core';
import { fadeInAnimation } from '../../core';

@Component({
    selector: 'app-home-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss' ],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class LandingComponent  {
}