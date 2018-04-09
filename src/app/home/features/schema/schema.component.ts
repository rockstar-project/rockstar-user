import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Schema, MicroserviceService, UtilsService } from '../../../core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-feature-schema',
    templateUrl: './schema.component.html',
    styleUrls: ['./schema.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
              query('.schema-card', [
                style({opacity: 0, transform: 'translateY(-100px)'}),
                stagger(-30, [
                  animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ])
              ])
            ])
        ])
    ]
})

export class SchemaFeatureComponent implements OnInit, OnDestroy {

    @HostBinding('@pageAnimations')
    public animatePage = true;

    sub: any;
    schemas: Array<Schema>

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
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

}
