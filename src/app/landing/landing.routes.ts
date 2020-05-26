import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { HowItWorksContentResolve } from './howitworks/howitworks.resolve';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '',
        component: LandingComponent,
        children: [
            {
                path: '',
                redirectTo: 'hero',
                pathMatch: 'full'
            },
            {
                path: 'hero',
                component: HeroComponent
            },
            {
                path: 'howitworks',
                component: HowItWorksComponent,
                resolve: {
                    howitworks: HowItWorksContentResolve
                }
            },
            {
                path: 'features',
                loadChildren: './features/features.module#FeaturesModule'
            },
            {
                path: 'benefits',
                loadChildren: './benefits/benefits.module#BenefitsModule'
            },
            {
                path: 'pricing',
                loadChildren: './pricing/pricing.module#PricingModule'  
            },
            {
                path: 'blog',
                loadChildren: './blog/blog.module#BlogModule'
            },
            {
                path: 'legal',
                loadChildren: './legal/legal.module#LegalModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})
export class LandingRoutingModule { }