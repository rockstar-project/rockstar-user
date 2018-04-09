import { Routes } from '@angular/router';

import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';

export const LandingRoutes: Routes = [
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
                component: HowItWorksComponent
            }
        ]
    }
];