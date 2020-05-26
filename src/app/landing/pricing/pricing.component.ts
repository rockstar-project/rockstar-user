import { Component, OnInit } from '@angular/core';
import { PricingService } from './pricing.service';
import { Plans } from './pricing.model';
import { fadeInAnimation } from './fadein.animation';

@Component({
  selector: 'app-home-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})

export class PricingComponent implements OnInit {

  plans: Plans;

  constructor(private pricingService: PricingService) {
  }

  ngOnInit() {
    this.pricingService.getPricingPlans()
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
