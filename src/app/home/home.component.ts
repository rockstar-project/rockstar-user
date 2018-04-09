import { Component } from '@angular/core';
import { AuthService } from '../auth';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss' ]
})

export class HomeComponent  {

    constructor(public authService: AuthService) {
    }

}