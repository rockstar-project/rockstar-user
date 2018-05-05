import { Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchProductsResolve } from './search.resolve';

export const SearchRoutes: Routes = [
    { 
        path: '',
        component: SearchComponent,
        resolve: {
            products: SearchProductsResolve
        }
    }
];