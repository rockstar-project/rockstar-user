import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Architecture, MicroserviceService, UtilsService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import {trigger, style, animate, transition, group, query, stagger} from '@angular/animations';

@Component({
    selector: 'app-feature-architecture',
    templateUrl: './architecture.component.html',
    styleUrls: ['./architecture.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.container', [
                    style({ opacity: 0, transform: 'translateX(-50px)' }),
                    stagger(100, [
                    animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])

        ])
      ]
})

export class ArchitectureFeatureComponent implements OnInit, OnDestroy {
    
    sub: any;
    architectures: Array<Architecture>

    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.architectures = this.utilsService.sortDisplayOrder(this.route.snapshot.data['architectures']);
        });
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    } 
}

