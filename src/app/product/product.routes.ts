import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductRoutes as routes } from './product.routes';
import { OptionsComponent } from './options/options.component';
import { SpecificationComponent } from './spec/spec.component';
import { OverviewComponent } from './overview/overview.component';
import { CodeComponent } from './code/code.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductResolve } from '../core/services/product/product.resolve';

export const ProductRoutes: Routes = [
    { 
        path: 'product/:id', 
        component: ProductComponent,
        resolve: {
              product: ProductResolve      
        },
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            },
            {
                path: 'code',
                component: CodeComponent
            },
            {
                path: 'ci',
                component: GalleryComponent
            },
            {
                outlet: 'sidebar',
                path: 'options',
                component: OptionsComponent
            },
            {
                outlet: 'sidebar',
                path: 'spec',
                component: SpecificationComponent
            },
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            }
        ]
    }
];