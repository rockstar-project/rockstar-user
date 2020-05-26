import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { PricingRoutingModule } from './pricing.routes';
import { PricingComponent } from './pricing.component';
import { PricingService } from './pricing.service';

@NgModule({
    declarations: [
        PricingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        PricingRoutingModule,
    ],
    providers: [
        PricingService
    ]
})
export class PricingModule { }