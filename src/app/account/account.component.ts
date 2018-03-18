import { Component, Input, OnInit } from '@angular/core';
import { Account, AccountService, PaymentTransaction } from '../core';
import { fadeInAnimation, routerAnimation } from '../core';
import { AuthService } from '../auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})

export class AccountComponent implements OnInit {

  account: Account;
  payments: Array<PaymentTransaction>;

  constructor(private accountService: AccountService, private authService: AuthService) { }

  ngOnInit() {
    this.getAccount();
    this.getAccountPayments();
  }

  getAccount() {
    this.accountService.getAccount(this.authService.userProfile.email)
        .subscribe(
            resultset => {
              this.account = resultset;
            }
        );
  }

  getAccountPayments() {
    this.accountService.getAccountPayments(this.authService.userProfile.email)
        .subscribe(
            resultset => {
              this.payments = resultset;
            }
        );
  }

}