import { Component, OnInit } from '@angular/core';
import { ContentService, Content, fadeInAnimation } from '../core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [ fadeInAnimation ],
    host: { '[@fadeInAnimation]': '' }
})

export class LandingComponent implements OnInit  {

    appContent : Content;

    constructor(private title: Title, private contentService: ContentService) { }

    ngOnInit() {
        this.getContent();
    }

     getContent() {
         this.contentService.getContent('app')
            .subscribe(resultset => {
                this.appContent = resultset;
                if (this.appContent) {
                    this.title.setTitle(this.appContent.title);
                }
            });
     }
}