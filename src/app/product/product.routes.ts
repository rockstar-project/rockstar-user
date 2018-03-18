import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { DesignComponent } from './design/design.component';
import { DevelopComponent } from './develop/develop.component';
import { ProductRoutes as routes } from './product.routes';
import { OptionsComponent } from './design/options/options.component';
import { SpecificationComponent } from './design/spec/spec.component';
import { OverviewComponent } from './develop/overview/overview.component';
import { CodeComponent } from './develop/code/code.component';
import { GalleryComponent } from './develop/gallery/gallery.component';
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
                path: '',
                outlet: 'design',
                component: DesignComponent,
                children: [
                    {
                        path: 'options',
                        component: OptionsComponent
                    },
                    {
                        path: 'spec',
                        component: SpecificationComponent
                    }
                ]
            },
            {
                path: '',
                outlet: 'develop',
                component: DevelopComponent,
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
                        path: 'code',
                        component: CodeComponent
                    },
                    {
                        path: 'ci',
                        component: GalleryComponent
                    }
                ]
            }
        ]
    }
];