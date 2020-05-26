import { Routes, RouterModule } from '@angular/router';

import { PricingComponent } from './pricing.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '',
        component: PricingComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})
export class PricingRoutingModule { }