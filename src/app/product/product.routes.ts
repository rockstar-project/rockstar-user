import { Routes } from '@angular/router';

import { ProductDetailsComponent } from './details.component';
import { OverviewComponent } from './overview/overview.component';
import { DesignComponent } from './design/design.component';
import { CodeComponent } from './code/code.component';

export const ProductRoutes: Routes = [
    { 
        path: 'product/:url', 
        component: ProductDetailsComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'design',
                component: DesignComponent
            },
            {
                path: 'code',
                component: CodeComponent
            }
        ]
    },
];