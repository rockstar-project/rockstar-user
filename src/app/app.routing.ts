import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth';

const routes: Routes =[
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'callback',             
        component: CallbackComponent 
    },
    {
        path: 'explore',
        loadChildren: './explore/explore.module#ExploreModule',
        canActivate: [
          AuthGuard
        ]
    },
    {
        path: 'search',
        loadChildren: './search/search.module#SearchModule',
        canActivate: [
          AuthGuard
        ]
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule',
        canActivate: [
          AuthGuard
        ]
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        canActivate: [
          AuthGuard
        ]
    },
    {
        path: 'collections',
        loadChildren: './collections/collections.module#CollectionsModule',
        canActivate: [
          AuthGuard
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    providers: [
        AuthGuard
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }