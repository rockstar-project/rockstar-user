import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { 
        path: '',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ],
})
export class ProfileRoutingModule { }