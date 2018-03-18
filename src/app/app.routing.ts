import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth';
import { LandingComponent } from './landing/landing.component';

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
        path: 'presentation',
        redirectTo: 'presentation'
    },
    {
        path: 'landing',
        redirectTo: 'landing'
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
    imports: [RouterModule.forRoot(routes)],
    providers: [
        AuthGuard
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }