import { Component, ViewEncapsulation, HostBinding } from '@angular/core';
import { fadeInAnimation } from './fadein.animation';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { UtilsService, MicroserviceService, MicroserviceFeature } from '../../core';

const NICE_EASING = 'cubic-bezier(0.35, 0, 0.25, 1)';

@Component({
    selector: 'app-home-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
              query('.main-route-container', [
                style({ opacity: 0, transform: 'translateY(100px)'}),
                animate('800ms ' + NICE_EASING, style({ opacity: 1, transform: 'none'}))
              ])
            ])
          ])
      ]
})

export class FeaturesComponent  {

    @HostBinding('@pageAnimations')
    public animatePage = true;
     
    features: Array<MicroserviceFeature>

    constructor(private microserviceService: MicroserviceService, private utilsService: UtilsService) {}

    ngOnInit() {
        this.getMicroserviceFeatures();
    }

    getMicroserviceFeatures() {
        this.microserviceService.getFeatures()
                .subscribe( resultset => this.features = this.utilsService.sortDisplayOrder(resultset));
    }
}