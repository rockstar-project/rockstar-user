import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, ProductsResolver } from './shared';

import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HowItWorksComponent } from './home/howitworks/howitworks.component';
import { FeaturesComponent } from './home/features/features.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { CallbackComponent } from './callback/callback.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionsComponent } from './collections/collections.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product/details.component';
import { OverviewComponent } from './product/overview/overview.component';
import { DesignComponent } from './product/design/design.component';
import { CodeComponent } from './product/code/code.component';
import { ExploreComponent } from 'app/explore/explore.component';
import { LegalComponent } from './home/legal/legal.component';

const routes: Routes =[
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'hero',
                pathMatch: 'full'
            },
            {
                path: 'hero',
                component: HeroComponent 
            },
            {
                path: 'howitworks',
                component: HowItWorksComponent 
            },
            {
                path: 'features',
                component: FeaturesComponent 
            },
            {
                path: 'pricing',
                component: PricingComponent 
            },
            {
                path: 'blogs',
                component: BlogsComponent 
            },
            {
                path: 'legal',
                component: LegalComponent
            }
        ]
    },
    {
        path: 'explore',
        component: ExploreComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'search',
        component: SearchComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'product/:url', 
        component: ProductDetailsComponent,
        canActivate: [ AuthGuard ],
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
    { 
        path: 'profile',              
        component: ProfileComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'collections',              
        component: CollectionsComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'account',              
        component: AccountComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'callback',             
        component: CallbackComponent 
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
