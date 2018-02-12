import { Component, OnInit, HostBinding } from '@angular/core';
import { ContentService, Content } from 'app/shared';
import { fadeInAnimation } from '../../shared';

@Component({
    selector: 'app-home-howitworks',
    templateUrl: './howitworks.component.html',
    styleUrls: ['./howitworks.component.scss'],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class HowItWorksComponent implements OnInit  {

    hero: Content;
    howitworks: Content;

    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.getHowItWorksContent();
       
    }

     getHowItWorksContent() {
        this.contentService.getContent('howitworks')
           .subscribe(resultset => this.howitworks = resultset);
    }
}

