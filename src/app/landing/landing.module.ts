import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from "./../core";
import { LandingRoutes as routes } from './landing.routes';
import { LandingComponent } from './landing.component';

@NgModule({
    declarations: [
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
