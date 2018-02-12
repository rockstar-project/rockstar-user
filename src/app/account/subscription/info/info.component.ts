import { Component, Input } from '@angular/core';
import { Subscription } from '../../../shared';

@Component({
  selector: 'account-subscriptioninfo',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class SubscriptionInfoComponent {

  @Input("item")
  subscription: Subscription;

}
