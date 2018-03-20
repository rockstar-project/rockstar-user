import { Component, OnInit } from '@angular/core';
import { ContentService, Content } from 'app/core';

@Component({
    selector: 'app-home-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit  {

    hero: Content;

    constructor(private contentService: ContentService) { }

    ngOnInit() {
        this.getHeroContent();
    }

     getHeroContent() {
         this.contentService.getContent('hero')
            .subscribe(resultset => this.hero = resultset);
     }

}

