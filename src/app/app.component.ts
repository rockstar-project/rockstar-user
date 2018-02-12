import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public authService: AuthService) {
        authService.handleAuthentication();
     }

}