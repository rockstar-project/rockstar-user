import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
  
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
      trigger('slider', [
        transition(":increment", group([
          query(':enter', [
            style({
              left: '100%'
            }),
            animate('0.5s ease-out', style('*'))
          ]),
          query(':leave', [
            animate('0.5s ease-out', style({
              left: '-100%'
            }))
          ])
        ])),
        transition(":decrement", group([
          query(':enter', [
            style({
              left: '-100%'
            }),
            animate('0.5s ease-out', style('*'))
          ]),
          query(':leave', [
            animate('0.5s ease-out', style({
              left: '100%'
            }))
          ])
        ])),
      ])
    ]
  })
  export class SliderComponent implements OnInit {
  
    @Input()
    items: any[];

    @Input()
    size: number;

    start: number = 0;
    end: number;

    ngOnInit() {
        this.end = this.size;
    }

    previous() {
      this.start = this.start - this.size;
    }
  
    next() {
      this.start = this.end;
      this.end = this.start + this.size;
    }
  
  }