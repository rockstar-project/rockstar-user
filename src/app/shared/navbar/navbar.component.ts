import { Component, OnInit } from '@angular/core';
import { AuthService } from './..';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
    profile: string;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.authService.loggedIn$.subscribe(result => {
             if (result) {
                if (this.authService.userProfile) {
                    this.profile = this.authService.userProfile;
                  }
             }
        });
    }
}
