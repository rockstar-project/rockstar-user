import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

export const listAnimation =

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
          ]),
        ])
      ])
    ]);