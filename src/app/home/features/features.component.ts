import { Component, HostBinding } from '@angular/core';
import { fadeInAnimation } from '../../shared';

@Component({
    selector: 'app-home-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class FeaturesComponent  {
}
