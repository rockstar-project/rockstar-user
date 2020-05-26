import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchProductsResolve } from './search.resolve';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '',
        component: SearchComponent,
        resolve: {
            products: SearchProductsResolve
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})
export class SearchRoutingModule { }