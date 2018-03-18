import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AccountRoutes as routes } from './account.routes';
import { AccountComponent } from './account.component';
import { PaymentInfoComponent } from './payment/info/info.component';
import { PaymentHistoryComponent } from './payment/history/history.component';
import { BillingInfoComponent } from './billing/info/info.component';
import { SubscriptionInfoComponent } from './subscription/info/info.component';

@NgModule({
    declarations: [
        AccountComponent,
        PaymentInfoComponent,
        BillingInfoComponent,
        SubscriptionInfoComponent,
        PaymentHistoryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        JWBootstrapSwitchModule,
        RouterModule.forChild(routes)
    ]
})
export class AccountModule { }
