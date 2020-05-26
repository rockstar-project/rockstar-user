import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../core';
import { BenefitsRoutes as routes } from './benefits.routes';
import { AgilityBenefitComponent } from './agility/agility.component';
import { ProductivityBenefitComponent } from './productivity/productivity.component';
import { FlexibilityBenefitComponent } from './flexibility/flexibility.component';
import { BenefitsComponent } from './benefits.component';

@NgModule({
    declarations: [
        AgilityBenefitComponent,
        ProductivityBenefitComponent,
        FlexibilityBenefitComponent,
        BenefitsComponent
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
export class BenefitsModule { }