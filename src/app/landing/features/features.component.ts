import { Component, ViewEncapsulation, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { fadeInAnimation } from './features.animation';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import { UtilsService, MicroserviceService, MicroserviceFeature } from '../../core';
import { Router, ActivatedRoute } from '@angular/router';

const NICE_EASING = 'cubic-bezier(0.35, 0, 0.25, 1)';

@Component({
    selector: 'app-home-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                group ([
                    query('h2,h4', [
                        style({ opacity: 0 }),
                        stagger(100, [
                          animate('1000ms ease-out', style({ opacity: 1 }))
                        ])
                      ]),
                    query('.feature-card', [
                        style({opacity: 0, transform: 'translateY(-50px)'}),
                        stagger(100, [
                            animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                        ])
                    ])
                ])
            ])
          ])
      ]
})

export class FeaturesComponent implements OnInit, OnDestroy {

    @HostBinding('@pageAnimations')
    public animatePage = true;

    sub: any;
    features: Array<MicroserviceFeature>

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.features = this.utilsService.sortDisplayOrder(this.route.snapshot.data['features']);
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }   
}