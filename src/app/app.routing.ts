import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './auth/interceptor.service';

const routes: Routes =[
    {
      path: 'landing',
      loadChildren: './landing/landing.module#LandingModule',
    },
    {
      path: 'profile',
      loadChildren: './profile/profile.module#ProfileModule',
      canActivate: [
        AuthGuard
      ]
    },
    {
        path: 'explore',
        loadChildren: './explore/explore.module#ExploreModule',
        canActivate: [
          AuthGuard
        ]
    },
    { 
      path: '', 
      redirectTo: 'landing', 
      pathMatch: 'full' 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }
    ]
  })
  export class AppRoutingModule { }