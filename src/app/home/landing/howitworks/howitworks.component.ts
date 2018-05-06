import { Component, OnInit, HostBinding } from '@angular/core';
import { Content } from './../content.model';
import { ContentService } from './../content.service';
import { trigger, group, query, transition, style, animate, stagger } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../../core';

@Component({
    selector: 'app-home-landing',
    templateUrl: './howitworks.component.html',
    styleUrls: ['./howitworks.component.scss' ],
    animations: [
        
        trigger('pageAnimations', [
            transition(':enter', [
              
                  query('.howitworks-card', [
                    style({ opacity: 0 }),
                    stagger(200, [
                        animate('0.5s ease-out', style({ opacity: 1}))
                    ])
                ]),
            
            ])
          ])
      ]
})

export class HowItWorksComponent  implements OnInit {

  @HostBinding('@pageAnimations')
  public animatePage = true;

  sub: any;
  howitworks: Content

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private utilsService: UtilsService) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.howitworks =this.route.snapshot.data['howitworks'];
      });
  }

  ngOnDestroy() {
      if (this.sub) {
          this.sub.unsubscribe();
      }
  }   
    
}