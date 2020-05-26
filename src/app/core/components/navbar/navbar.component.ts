import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
    profileJson: string = null;
    constructor(public authService: AuthService) {
        this.authService.userProfile$.subscribe(
            profile => this.profileJson = JSON.stringify(profile, null, 2)
          );
    }

    ngOnInit() {
    }
}
