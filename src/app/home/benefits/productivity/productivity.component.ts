import { Component, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-benefits-productivity',
    templateUrl: './productivity.component.html',
    styleUrls: ['./productivity.component.scss' ],
    animations: [
        trigger('pageAnimation', [
          transition(':enter', [
            query('.info-container .info', style({ transform: 'translateY(-50px)', opacity: 0})),
            query('.info-container', [
              stagger(300, [
                query('.info', [
                  stagger(100, [
                    animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                  ])
                ])
              ])
            ])
          ]),
        ])
      ]
})

export class ProductivityBenefitComponent implements OnInit {

    @HostBinding('@pageAnimation')
    public animatePage = true;

    item: any;

    ngOnInit() {
        this.item = this.getContent();
    }

    getContent() {
        return {
            title: "Productivity",
            description: "Rapidly build out microservices",
            image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/background/binary_pattern_blue_bg_1920x1080.png",
            contents: [
                {
                    title: "Faster time to market",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/rocket.png",
                    description: "Build, test and launch new features in days rather than months"
                },
                {
                    title: "Develop more, code less",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/messagebroker2.png",
                    description: "Discover and use pre-built microservice templates"
                },
                {
                    title: "Prototype with ease",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/logmanagement.png",
                    description: "Choose from a veriety of many colors resembling sugar paper pastels"
                },
                {
                    title: "Bootstrap without debt",
                    image: "http://res.cloudinary.com/dzmrr9uj9/image/upload/debug.png",
                    description: "Get started faster with high quality CodeComponent"
                }
            ]
        };
    }
}