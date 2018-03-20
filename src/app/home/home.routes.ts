import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HeroComponent } from './landing/hero/hero.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LegalComponent } from './legal/legal.component';
import { TermsOfUseComponent } from './legal/termsofuse/termsofuse.component';
import { PrivacyPolicyComponent } from './legal/privacypolicy/privacypolicy.component';
import { PricingPlansComponent } from '../home/plan/plan.component';

export const HomeRoutes: Routes = [
    { 
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'landing',
                pathMatch: 'full'
            },
            {
                path: 'landing',
                loadChildren: './landing/landing.module#LandingModule'
            },
            {
                path: 'plans',
                component: PricingPlansComponent 
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