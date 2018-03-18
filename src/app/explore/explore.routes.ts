import { Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { ProductsResolve } from '../core';

export const ExploreRoutes: Routes = [
    { 
        path: '',
        component: ExploreComponent,
        resolve: {
            products: ProductsResolve
        }
    }
];