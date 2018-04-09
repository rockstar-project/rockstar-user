import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Capability, UtilsService } from '../../../core';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-feature-capabilityitems',
    templateUrl: './capabilityitems.component.html',
    styleUrls: ['./capabilityitems.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
              query('.capability-item-card', [
                style({opacity: 0, transform: 'translateY(-100px)'}),
                stagger(-30, [
                  animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                ])
              ])
            ])
        ])
    ]
})

export class CapabilityItemsFeatureComponent implements OnInit, OnDestroy  {

    sub: any;
    capabilityItems: Array<Capability>

    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.capabilityItems = this.utilsService.sortDisplayOrder(this.route.snapshot.data['capabilityitems']);
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    } 
}