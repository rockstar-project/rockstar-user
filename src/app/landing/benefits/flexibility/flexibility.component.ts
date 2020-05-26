import { Component, ElementRef, HostListener, HostBinding } from '@angular/core';
import { trigger, state, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-benefits-flexibility',
    templateUrl: './flexibility.component.html',
    styleUrls: ['./flexibility.component.scss' ],
    animations: [
        trigger('pageAnimation', [
          transition(':leave', [
            animate(1000, style({ opacity: 0 }))
          ])
        ])
      ]
})

export class FlexibilityBenefitComponent  {

    @HostBinding('@pageAnimation')
    public animatePage = true;

    item: any;

    ngOnInit() {
        this.item = this.getContent();
    }

    getContent() {
        return {
            title: "Flexibility",
            description: "Mix n' match your stack",
            image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/background/technology_bg_1920x1080.jpg",
            contents: [
                {
                    title: "Bootiful Microservices",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/package.png",
                    description: "Build out REST API & event-driven microservices using Spring Boot framework with Java runtime"
                },
                {
                    title: "Restify with NodeJS ",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/artifact.png",
                    description: "Larger, yet dramatically thinner. More powerful, but remarkably power efficient"
                },
                {
                    title: "Python & Flask",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/webframework.png",
                    description: "Choose from a veriety of many colors resembling sugar paper pastels"
                },
                {
                    title: "Ultra Modern Apps",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/cloudarchitecture.png",
                    description: "Find unique and handmade delightful designs related items directly from our sellers"
                }
            ]
        };
    }
}