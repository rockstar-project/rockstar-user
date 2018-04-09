import { Routes } from '@angular/router';

import { LegalComponent } from './legal.component';

export const LegalRoutes: Routes = [
    { 
        path: ':slug',
        component: LegalComponent
    }
];