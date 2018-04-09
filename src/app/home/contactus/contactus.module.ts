import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsRoutes as routes } from './contactus.routes';
import { ContactUsComponent } from './contactus.component';

@NgModule({
    declarations: [
        ContactUsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ]
})
export class ContactUsModule { }