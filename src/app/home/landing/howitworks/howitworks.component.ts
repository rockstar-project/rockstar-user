import { Component, OnInit, HostBinding } from '@angular/core';
import { Content } from './../content.model';
import { ContentService } from './../content.service';
import { trigger, query, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-home-landing',
    templateUrl: './howitworks.component.html',
    styleUrls: ['./howitworks.component.scss' ],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
              query('.container', [
                style({ opacity: 0, transform: 'translateY(100px)'}),
                animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none'}))
              ])
            ])
          ])
      ]
})

export class HowItWorksComponent  implements OnInit {

    @HostBinding('@pageAnimations')
    public animatePage = true;

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