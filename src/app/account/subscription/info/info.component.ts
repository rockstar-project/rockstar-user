import { Component, Input } from '@angular/core';
import { Subscription } from '../../../core';
import { ContentService } from '../../../core';
import { Plans } from '../../../core/';
import { fadeInAnimation } from '../../../core';

@Component({
  selector: 'account-subscription',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class SubscriptionInfoComponent {

  plans: Plans;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.contentService.getPricingPlans()
        .subscribe(resultset => this.plans = resultset);
  }

  changePlan(action: string) {
    if (action === 'upgrade') {
        this.upgrade();
    } else {
        this.downgrade();
    }
  }

  upgrade() {
        var handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
          }
        });
    
        handler.open({
          name: 'Rockstar',
          description: '2 widgets',
          amount: 2000
        });
    
    }

  downgrade() {
      console.log('downgrading plan');
  }

}
