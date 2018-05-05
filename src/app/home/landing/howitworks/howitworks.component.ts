import { Component, OnInit, HostBinding } from '@angular/core';
import { Content } from './../content.model';
import { ContentService } from './../content.service';
import { trigger, query, transition, style, animate, stagger } from '@angular/animations';

@Component({
    selector: 'app-home-landing',
    templateUrl: './howitworks.component.html',
    styleUrls: ['./howitworks.component.scss' ],
    animations: [
        
        trigger('pageAnimations', [
            transition(':enter', [
              query('.container-fluid, .container-fluid .item', [
                style({ opacity: 0, transform: 'translateY(-50px)' }),
                stagger(100, [
                  animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                ])
              ])
            ])
          ])
          /*
         trigger('pageAnimations', [
            transition(':enter', [
              query('.container', [
                style({ opacity: 0 }),
                stagger(100, [
                  animate('1000ms ease-out', style({ opacity: '*' })),
                ])
              ])
            ])
          ]),
          */
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