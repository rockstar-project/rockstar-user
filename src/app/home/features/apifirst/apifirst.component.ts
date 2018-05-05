import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Schema, MicroserviceService, UtilsService } from '../../../core';
import { trigger, group, transition, animate, style, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-feature-apifirst',
    templateUrl: './apifirst.component.html',
    styleUrls: ['./apifirst.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                group([
                    query('.container-fluid, .container-fluid .schema-card', [
                        style({opacity: 0, transform: 'translateY(-50px)'}),
                        stagger(100, [
                            animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                        ])
                    ]),
                    query('.schema-img img', [
                        style({ opacity: 0 }),
                        animate('4000ms ease-out', style({ opacity: 1 }))
                    ])
                ])
            ])
        ])
    ]
})

export class ApiFirstFeatureComponent implements OnInit, OnDestroy {

    @HostBinding('@pageAnimations')
    public animatePage = true;

    sub: any;
    schemas: Array<Schema>

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService,
        private location: Location) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.schemas = this.utilsService.sortDisplayOrder(this.route.snapshot.data['schemas']);
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
