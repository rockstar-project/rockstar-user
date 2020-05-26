import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { OptionsComponent } from './options/options.component';
import { SpecificationComponent } from './spec/spec.component';
import { OverviewComponent } from './overview/overview.component';
import { CodeComponent } from './code/code.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductResolve } from '../core/services/product/product.resolve';
import { OptionsResolve } from './options/options.resolve';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: 'product/:id', 
        component: ProductComponent,
        resolve: {
              product: ProductResolve      
        },
        children: [
            {
                path: 'code',
                component: CodeComponent
            },
            {
                outlet: 'sidebar',
                path: 'architecture',
                component: GalleryComponent
            },
            {
                outlet: 'sidebar',
                path: 'overview',
                component: OverviewComponent
            },
            {
                outlet: 'sidebar',
                path: 'options',
                component: OptionsComponent,
                resolve: {
                    options: OptionsResolve
                }
            },
            {
                outlet: 'sidebar',
                path: 'spec',
                component: SpecificationComponent
            },
            {
                path: '',
                redirectTo: 'code',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})
export class ProductRoutingModule { }