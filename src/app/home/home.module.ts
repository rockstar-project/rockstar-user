import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutes as routes } from './home.routes';

import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LegalComponent } from './legal/legal.component';
import { TermsOfUseComponent } from './legal/termsofuse/termsofuse.component';
import { PrivacyPolicyComponent } from './legal/privacypolicy/privacypolicy.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        HowItWorksComponent,
        FeaturesComponent,
        PricingComponent,
        BlogsComponent,
        LegalComponent,
        PrivacyPolicyComponent,
        TermsOfUseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule { }
