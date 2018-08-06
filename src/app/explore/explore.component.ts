import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeInAnimation, UtilsService } from 'app/core';
import { Product, ProductSearchResult } from './../core';
import { AuthService } from './../auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ExploreComponent implements OnInit, OnDestroy {

  publishitems: Array<Product>;
  upcomingitems: Array<Product>;

  sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utils: UtilsService) { }

   ngOnInit() {
     let result = null;
    this.sub = this.route.params.subscribe(params => {
      result = this.route.snapshot.data['products'];
      if (result) {
        this.publishitems = new Array<Product> ();
        this.upcomingitems = new Array<Product> ();
        if (result._embedded && result._embedded.productResourceList) {
          for (let current of result._embedded.productResourceList) {
            if (current.state === 'publish') {
              this.publishitems.push(current);
            } else if (current.state === 'draft') {
              this.upcomingitems.push(current);
            }
          }
        }
      }
   });
  }

  onSelectProduct(url: string) {
    if (url) {
      //this.router.navigate(['product', this.utils.resourceId(url), {outlets: {sidebar: ['options']}}]);
      this.router.navigateByUrl("/product/" + this.utils.resourceId(url) + '/(code//sidebar:overview)');
    }
}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
