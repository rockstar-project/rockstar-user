import { Component, Input } from '@angular/core';
import { PaymentInfo, PaymentTransaction } from '../../../core/';

@Component({
  selector: 'account-payment-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})

export class PaymentHistoryComponent {

  @Input("items")
  payments: Array<PaymentTransaction>;

}