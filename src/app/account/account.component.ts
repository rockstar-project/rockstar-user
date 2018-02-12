import { Component, Input, OnInit } from '@angular/core';
import { Account, AccountService, AuthService } from '../shared';
import { fadeInAnimation } from '../shared';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})

export class AccountComponent implements OnInit {

  account: Account;

  constructor(private accountService: AccountService, private authService: AuthService) { }

  ngOnInit() {
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAccount(this.authService.userProfile.email)
        .subscribe(
            resultset => {
              this.account = resultset;
            }
        );
  }

}