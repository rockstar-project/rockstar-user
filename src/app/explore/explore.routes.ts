import { Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { ProductsResolver } from '../shared';
import { CardGridComponent } from './card-grid/card-grid.component';

export const ExploreRoutes: Routes = [
    { 
        path: 'explore',
        component: ExploreComponent,
        children: [
            {
                path: '',
                redirectTo: 'restapi',
                pathMatch: 'full'
            },
            {
                path: ':architecture',
                component: CardGridComponent,
                resolve: {
                    products: ProductsResolver
                }
            }
        ]
    }
];