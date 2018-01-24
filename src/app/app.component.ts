import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { AuthService, fadeInAnimation } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [ fadeInAnimation ]
})
export class AppComponent implements OnInit {
   
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor( private router: Router, public authService: AuthService) {
        authService.handleAuthentication();
     }

    ngOnInit() {
    }

    public getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}
