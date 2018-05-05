import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

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