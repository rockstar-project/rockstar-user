import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AckFxModule, fxArray } from "ack-angular-fx";
import { ContentService } from "./content.service";
import { LandingRoutes as routes } from './landing.routes';
import { LandingComponent } from './landing.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './howitworks/howitworks.component';

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
        AckFxModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        ContentService
    ]
})
export class LandingModule { }