import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, ProductsResolver } from './shared';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionsComponent } from './profile/collections/collections.component';
import { ConnectionsComponent } from './profile/connections/connections.component';
import { SearchComponent } from './search/search.component';
import { ProductPageComponent } from './product/page.component';
import { ExploreComponent } from 'app/explore/explore.component';

const routes: Routes =[
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home',
        component: HomeComponent 
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
        component: ProductPageComponent,
        canActivate: [ AuthGuard ]
    },
    { 
        path: 'profile',              
        component: ProfileComponent,
        canActivate: [ AuthGuard ],
        children: [
            { 
                path: '',              
                redirectTo: 'collections',
                pathMatch: 'full' 
            },
            { 
                path: 'collections',              
                component: CollectionsComponent 
            },
            { 
                path: 'connections',              
                component: ConnectionsComponent 
            }
        ]
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
