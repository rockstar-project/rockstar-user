import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from './../fadein.animation';
import { Content } from './../content.model';
import { ContentService } from './../content.service';
import { trigger, query, stagger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-landing-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss' ],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query(':self, h1,h3', [
                  style({ opacity: 0 }),
                  stagger(100, [
                    animate('1000ms ease-out', style({ opacity: 1 }))
                  ])
                ])
              ])
          ])
      ]
})

export class HeroComponent  implements OnInit {

    @HostBinding('@pageAnimations')
    public animatePage = true;

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