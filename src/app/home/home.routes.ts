import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LegalComponent } from './legal/legal.component';
import { TermsOfUseComponent } from './legal/termsofuse/termsofuse.component';
import { PrivacyPolicyComponent } from './legal/privacypolicy/privacypolicy.component';

export const HomeRoutes: Routes = [
    { 
        path: 'home',
        component: HomeComponent,
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
                component: HowItWorksComponent 
            },
            {
                path: 'features',
                component: FeaturesComponent 
            },
            {
                path: 'pricing',
                component: PricingComponent 
            },
            {
                path: 'blogs',
                component: BlogsComponent 
            },
            {
                path: 'legal',
                component: LegalComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'terms',
                        pathMatch: 'full'
                    },
                    {
                        path: 'terms',
                        component: TermsOfUseComponent 
                    },
                    {
                        path: 'policy',
                        component: PrivacyPolicyComponent 
                    }
                ]
            }
        ]
    }
];