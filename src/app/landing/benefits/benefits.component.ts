import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss' ],
    animations: [
        trigger('routerAnimations', [
          transition('productivity => flexibility', [
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            query(':leave', style({ zIndex: 100 })),
            query(':enter', style({ transform: 'translateY(100%)' })),
    
            group([
              query(':leave', group([
                animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
                animateChild()
              ])),
              query(':enter', group([
                animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)' })),
                animateChild()
              ]))
            ])
          ]),
          transition('flexibility => productivity', [
            query(':enter, :leave',
              style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            query(':enter', [
              style({ opacity:0, transform: 'translateX(100%)'}),
              query('info-box', [
                style({ opacity:0, transform: 'scale(0)'})
              ])
            ]),
    
            query(':leave', [
              query('info-box', [
                stagger(50, [
                  animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, transform: 'translateY(-50px)' }))
                ])
              ]),
              animate('800ms cubic-bezier(.35,0,.25,1)', style({ opacity:0, transform: 'translateX(-100%)' }))
            ]),
    
            group([
              query(':enter', [
                animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
              ]),
              query(':enter info-box', [
                stagger(200, [
                  animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                ])
              ])
            ])
          ])
        ])
      ]
})

export class BenefitsComponent  {

    prepareRouteTransition(outlet) {
        const animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    }
}