import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { ProfileRoutes as routes } from './profile.routes';
import { ProfileComponent } from './profile.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { ConnectionsComponent } from './connections/connections.component';


@NgModule({
    declarations: [
        ProfileComponent,
        AboutMeComponent,
        ConnectionsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        JWBootstrapSwitchModule,
        RouterModule.forChild(routes)
    ]
})
export class ProfileModule { }
