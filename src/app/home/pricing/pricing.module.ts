import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { PricingRoutes as routes } from './pricing.routes';
import { PricingComponent } from './pricing.component';
import { PricingService } from './pricing.service';

@NgModule({
    declarations: [
        PricingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        JWBootstrapSwitchModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PricingService
    ]
})
export class PricingModule { }