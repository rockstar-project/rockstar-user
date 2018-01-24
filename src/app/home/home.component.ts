import { Component, OnInit, OnDestroy, HostListener, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService, ProductSearchResult, ProductSearchCriteria } from 'app/shared';
import { ContentService, Content } from 'app/shared';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy  {

    hero: Content;
    howitworks: Content;
    productResult: ProductSearchResult;

    constructor(public el: ElementRef, private router: Router, private route: ActivatedRoute, private contentService: ContentService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        body.classList.add('loading');

        this.getHeroContent();
        this.getHowItWorksContent();
       
    }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        body.classList.remove('loading');
       
    }


     @HostListener('window:scroll', ['$event'])
     checkScroll() {
        const componentPosition = document.getElementsByClassName('add-animation');
        const scrollPosition = window.pageYOffset;
        
        for(var i = 0; i < componentPosition.length; i++) {
            var rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if ( scrollPosition + window.innerHeight >= rec ) {
                componentPosition[i].classList.add('animated');
            } else if ( scrollPosition + window.innerHeight * 0.8 < rec ) {
                componentPosition[i].classList.remove('animated');
            }
        }
     }

     getHeroContent() {
         this.contentService.getContent('hero')
            .subscribe(resultset => this.hero = resultset);
     }

     getHowItWorksContent() {
        this.contentService.getContent('howitworks')
           .subscribe(resultset => this.howitworks = resultset);
    }
}

