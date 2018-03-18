import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './../core';
import { HomeRoutes as routes } from './home.routes';

import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { FeaturesComponent } from './features/features.component';
import { BlogsComponent } from './blogs/blogs.component';

import { LegalComponent } from './legal/legal.component';
import { TermsOfUseComponent } from './legal/termsofuse/termsofuse.component';
import { PrivacyPolicyComponent } from './legal/privacypolicy/privacypolicy.component';
import { PricingPlansComponent } from '../home/plan/plan.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        HowItWorksComponent,
        FeaturesComponent,
        BlogsComponent,
        LegalComponent,
        PrivacyPolicyComponent,
        TermsOfUseComponent,
        PricingPlansComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        JWBootstrapSwitchModule,
        CoreModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule { }
