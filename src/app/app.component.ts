import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public authService: AuthService) {
        authService.handleAuth();
     }

}