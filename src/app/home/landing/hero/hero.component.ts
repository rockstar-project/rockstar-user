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
              query('.jumbotron', [
                style({ opacity: 0, transform: 'translateY(-100px)'}),
                animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none'}))
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