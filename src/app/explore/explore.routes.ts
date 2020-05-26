import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore.component';
import { ExploreProductsResolve } from './explore.resolve';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '',
        component: ExploreComponent,
        resolve: {
            products: ExploreProductsResolve
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
    providers: [
    ]
})
export class ExploreRoutingModule { }