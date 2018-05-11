import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Schema, MicroserviceService, UtilsService, Capability } from '../../../../core';
import { trigger, group, transition, animate, style, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-capability-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.container-fluid, .container-fluid .media', [
                    style({ opacity: 0, transform: 'translateX(-50px)' }),
                    stagger(100, [
                        animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ])
      ]
})

export class CoreCapabilityComponent implements OnInit, OnDestroy {

    sub: any;
    core: Capability;

    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.core = this.route.snapshot.data['core'];
            
            if (this.core && this.core.subcapabilities) {
                for (let current of this.utilsService.sortDisplayOrder(this.core.subcapabilities)) {
                    if (current.slug === 'clientsidelb') {
                        current.color = 'frost';
                    } else if (current.slug === 'httplistener') {
                        current.color = 'flickr';
                    } else if (current.slug === 'logging') {
                        current.color = 'vine';
                    } else if (current.slug === 'messaging') {
                        current.color = 'virgin';
                    } else if (current.slug === 'tracing') {
                        current.color = 'america';
                    } else if (current.slug === 'monitoring') {
                        current.color = 'piglet';
                    } else if (current.slug === 'persistence') {
                        current.color = 'sunset';
                    } else if (current.slug === 'protocol') {
                        current.color = 'firewatch';
                    } else if (current.slug === 'resilience') {
                        current.color = 'delhi';
                    } else if (current.slug === 'security') {
                        current.color = 'influenza';
                    } else if (current.slug === 'serialization') {
                        current.color = 'caramel';
                    } else if (current.slug === 'discovery') {
                        current.color = 'turboscent';
                    } else if (current.slug === 'validation') {
                        current.color = 'darkknight';
                    } 
                }
            }
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }   

}
