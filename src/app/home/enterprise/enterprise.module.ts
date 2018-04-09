import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnterpriseRoutes as routes } from './enterprise.routes';
import { EnterpriseComponent } from './enterprise.component';

@NgModule({
    declarations: [
        EnterpriseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ]
})
export class EnterpriseModule { }