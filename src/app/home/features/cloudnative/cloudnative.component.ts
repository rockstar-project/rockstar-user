import { Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { Capability, MicroserviceService, UtilsService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, style, animate, transition, group, query, stagger } from '@angular/animations';
import { Location } from '@angular/common';

const NICE_EASING = 'cubic-bezier(0.35, 0, 0.25, 1)';

@Component({
    selector: 'app-feature-cloudnative',
    templateUrl: './cloudnative.component.html',
    styleUrls: ['./cloudnative.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
              query('.container-fluid, .container-fluid .media-card', [
                style({ opacity: 0, transform: 'translateY(100px)'}),
                animate('800ms ' + NICE_EASING, style({ opacity: 1, transform: 'none'}))
              ])
            ])
          ])
      ]
})

export class CloudnativeFeatureComponent implements OnInit, OnDestroy {

    sub: any;
    capabilities: Array<Capability>;

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
            this.capabilities = this.utilsService.sortDisplayOrder(this.route.snapshot.data['capabilities']);
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }   


    onSelectCapability(capability: Capability) {
        if (capability) {
            this.router.navigate(['../capabilities/' + capability.slug], { relativeTo: this.route });
        }
    }

    goback() {
        this.location.back();
    }
}