import { Component, OnInit } from '@angular/core';
import { ContentService, Content } from 'app/core';

@Component({
    selector: 'app-home-howitworks',
    templateUrl: './howitworks.component.html',
    styleUrls: ['./howitworks.component.scss']
})

export class HowItWorksComponent implements OnInit  {

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

