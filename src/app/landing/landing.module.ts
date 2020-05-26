import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core';

import { ContentService } from "./content.service";
import { LandingRoutingModule } from './landing.routes';
import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { HowItWorksContentResolve } from './howitworks/howitworks.resolve';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

@NgModule({
    declarations: [
        LandingComponent,
        HeroComponent,
        HowItWorksComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CoreModule,
        JwBootstrapSwitchNg2Module,
        LandingRoutingModule,
    ],
    providers: [
        ContentService,
        HowItWorksContentResolve
    ]
})
export class LandingModule { }
      