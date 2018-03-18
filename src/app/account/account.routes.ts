import { Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { SubscriptionInfoComponent } from './subscription/info/info.component';
import { PaymentInfoComponent } from './payment/info/info.component';
import { BillingInfoComponent } from './billing/info/info.component';

export const AccountRoutes: Routes = [
    { 
        path: '',
        component: AccountComponent,
        children: [
            {
                path: '',
                redirectTo: 'subscription',
                pathMatch: 'full'
            },
            {
                path: 'subscription',
                component: SubscriptionInfoComponent
            },
            {
                path: 'billing',
                component: BillingInfoComponent
            },
            {
                path: 'payment',
                component: PaymentInfoComponent
            }
        ]
    }
];