import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared';
import { fadeInAnimation } from './../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProfileComponent implements OnInit {

    profile: any;
   
    constructor(public authService: AuthService) { }

    ngOnInit() {
        if (this.authService.userProfile) {
          this.profile = this.authService.userProfile;
        }
    }
}
