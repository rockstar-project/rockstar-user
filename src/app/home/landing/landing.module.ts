import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from "./../../core";
import { LandingRoutes as routes } from './landing.routes';
import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';
import { FeaturesComponent } from './features/features.component';
import { Feature2Component } from './feature2/feature2.component';

@NgModule({
    declarations: [
        HeroComponent,
        HowItWorksComponent,
        FeaturesComponent,
        Feature2Component,
        LandingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CoreModule,
        RouterModule.forChild(routes)
    ]
})
export class LandingModule { }