import { Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { Capability, MicroserviceService, UtilsService } from '../../../core';
import { Router, ActivatedRoute } from '@angular/router';
import {trigger, style, animate, transition, group, query, stagger} from '@angular/animations';

@Component({
    selector: 'app-feature-capabilities',
    templateUrl: './capabilities.component.html',
    styleUrls: ['./capabilities.component.scss']
})

export class CapabilitiesFeatureComponent implements OnInit, OnDestroy {

    sub: any;
    capabilities: Array<Capability>;
    selected: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.capabilities = this.utilsService.sortDisplayOrder(this.route.snapshot.data['capabilities']);
            if (this.capabilities && this.capabilities.length > 0) {
                this.selected = this.capabilities[0].slug;
            }
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }  

    onSelectCapability(capability: Capability) {
        if (capability) {
            this.selected = capability.slug;
            this.router.navigateByUrl('/home/features/cloudnative/' + this.selected);
        }
    }
}