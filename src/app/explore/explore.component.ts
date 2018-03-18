import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { MetadataResultSet, Metadata, MetadataService, fadeInAnimation, UtilsService } from 'app/core';
import { ProductService, Product, ProductSearchResult, ProductSearchCriteria } from './../core';
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

  items: ProductSearchResult;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private utils: UtilsService,
    public authService: AuthService,
    private metadataService: MetadataService) { }

   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.items = this.route.snapshot.data['products'];
   });
  }


  onSelectProduct(url: string) {
    this.router.navigate(['product', this.utils.resourceId(url), {outlets: {'design': ['options'], 'develop': ['overview']}}]);
    //this.router.navigateByUrl("/product/" + this.utils.resourceId(url));
}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
