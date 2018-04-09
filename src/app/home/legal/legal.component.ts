import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from './fadein.animation';
import { LegalItem } from './legal.model';
import { LegalService } from './legal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class LegalComponent implements OnInit {

    item: LegalItem;
    
    constructor(private route: ActivatedRoute, private legalService: LegalService) { }

    ngOnInit() {
      const slug = this.route.snapshot.params['slug'];
      this.getContent(slug);
    }

    getContent(slug: string) {
         this.legalService.getLegalItem(slug)
            .subscribe(resultset => this.item = resultset);
    }
}