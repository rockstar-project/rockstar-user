import { Component, Input } from '@angular/core';
import { Billing } from '../../../core';

@Component({
  selector: 'account-billinginfo',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class BillingInfoComponent {

  @Input("item")
  billing: Billing;

}