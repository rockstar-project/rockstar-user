import { Component, Input } from "@angular/core";
import { Location } from '@angular/common';

@Component({
    selector: 'error-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: [ './notfound.component.scss' ]
})

export class PageNotFoundComponent { 

    constructor(private location: Location) {
    }

    goback() {
        this.location.back();
    }
}