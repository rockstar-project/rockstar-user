import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CoreModule } from "./../core";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { ProfileRoutingModule } from './profile.routes';
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
        TagInputModule,
        JwBootstrapSwitchNg2Module,
        CoreModule,
        ProfileRoutingModule,
    ]
})
export class ProfileModule { }
