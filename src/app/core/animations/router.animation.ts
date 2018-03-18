import { trigger, transition, animate, style, query, stagger, animation, group, animateChild} from '@angular/animations';

export const routerAnimation = animation([
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':leave', style({ zIndex: 100 })),
    query(':enter', style({ transform: 'translateY(100%)' })),
    group([
      query(':leave', group([
        animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)', opacity: 0 })), // y: '-100%'
        animateChild()
      ])),
      query(':enter', group([
        animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)' })),
        animateChild()
      ]))
    ])
  ]);