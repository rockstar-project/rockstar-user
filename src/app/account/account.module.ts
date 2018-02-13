import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountRoutes as routes } from './account.routes';
import { AccountComponent } from './account.component';
import { PaymentInfoComponent } from './payment/info/info.component';
import { PaymentFormComponent } from './payment/form/form.component';
import { BillingInfoComponent } from './billing/info/info.component';
import { SubscriptionInfoComponent } from './subscription/info/info.component';

@NgModule({
    declarations: [
        AccountComponent,
        PaymentInfoComponent,
        BillingInfoComponent,
        SubscriptionInfoComponent,
        PaymentFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ]
})
export class AccountHomeModule { }
