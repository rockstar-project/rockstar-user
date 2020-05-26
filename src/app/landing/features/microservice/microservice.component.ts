import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Architecture, MicroserviceService, UtilsService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import {trigger, style, animate, transition, group, query, stagger} from '@angular/animations';
import { Location } from '@angular/common';

@Component({
    selector: 'app-feature-microservice',
    templateUrl: './microservice.component.html',
    styleUrls: ['./microservice.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.container, .container .item', [
                    style({ opacity: 0, transform: 'translateY(-50px)' }),
                    stagger(100, [
                        animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ])
      ]
})

export class MicroserviceFeatureComponent implements OnInit, OnDestroy {
    
    sub: any;
    architectures: Array<Architecture>

    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService,
        private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.architectures = this.utilsService.sortDisplayOrder(this.route.snapshot.data['architectures']);
            for (let current of this.architectures) {
                if (current.slug === 'restapi') {
                    current.color = 'info';
                } else if (current.slug === 'spa') {
                    current.color = 'success';
                } else if (current.slug === 'serverless') {
                    current.color = 'warning';
                } else if (current.slug === 'mobile') {
                    current.color = 'danger';
                } else if (current.slug === 'eventdriven') {
                    current.color = 'neutral';
                } else if (current.slug === 'scheduled') {
                    current.color = 'purple';
                }
            }
        });
    }
    
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    } 

    goback() {
        this.location.back();
    }
}

