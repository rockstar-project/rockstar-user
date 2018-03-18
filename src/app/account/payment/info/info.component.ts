import { Component, Input } from '@angular/core';
import { PaymentInfo } from '../../../core/';

@Component({
  selector: 'account-paymentinfo',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class PaymentInfoComponent {

  @Input("item")
  paymentInfo: PaymentInfo;

}
