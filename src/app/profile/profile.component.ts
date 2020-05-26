import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { fadeInAnimation } from './../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProfileComponent implements OnInit {
    profileJson: string = null;
   
    constructor(public authService: AuthService) { }

    ngOnInit() {
      this.authService.userProfile$.subscribe(
        profile => this.profileJson = JSON.stringify(profile, null, 2)
      );
    }
}
