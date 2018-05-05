import { Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { Capability, MicroserviceService, UtilsService } from '../../../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cloudnative-capability',
    templateUrl: './capabilities.component.html',
    styleUrls: ['./capabilities.component.scss']
})

export class CloudnativeCapabilityComponent implements OnInit, OnDestroy {

    sub: any;
    capabilities: Array<Capability>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
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
}