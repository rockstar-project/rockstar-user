import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Schema, MicroserviceService, UtilsService, Capability } from '../../../../core';
import { trigger, group, transition, animate, style, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-capability-infrastructure',
    templateUrl: './infrastructure.component.html',
    styleUrls: ['./infrastructure.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.jumbotron, .card', [
                    style({ opacity: 0, transform: 'translateX(-50px)' }),
                    stagger(100, [
                        animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ])
      ]
})

export class InfrastructureCapabilityComponent implements OnInit, OnDestroy {

    sub: any;
    infrastructure: Capability;

    @HostBinding('@pageAnimations')
    public animatePage = true;
    
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.infrastructure = this.route.snapshot.data['infrastructure'];
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }   

}
