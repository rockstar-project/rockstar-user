import { Component, OnInit } from '@angular/core';
import { AuthService } from './..';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
    profile: any;

    constructor(public authService: AuthService) {
         authService.handleAuthentication();
    }

    ngOnInit() {
        if (this.authService.userProfile) {
          this.profile = this.authService.userProfile;
        }
    }
}
