import { Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { ExploreProductsResolve } from './explore.resolve';

export const ExploreRoutes: Routes = [
    { 
        path: '',
        component: ExploreComponent,
        resolve: {
            products: ExploreProductsResolve
        }
    }
];