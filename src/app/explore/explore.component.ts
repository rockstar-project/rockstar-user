import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { MetadataResultSet, Metadata, MetadataService, fadeInAnimation, AuthService, DisplayOrderSortPipe } from 'app/shared';
import { ProductService, Product, ProductSearchResult, ProductSearchCriteria } from 'app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ExploreComponent implements OnInit {

  categories: Metadata[];

  constructor(
    private router: Router,
    private displayOrderSort: DisplayOrderSortPipe,
    public authService: AuthService,
    private metadataService: MetadataService) { }

  ngOnInit() {
      this.authService.loggedIn$.subscribe(result => {
        if (result) {
          this.metadataService.searchMetadata('architecture')
            .subscribe( result => {
              if (result) {
                this.categories = this.displayOrderSort.transform(result._embedded.metadataResourceList, null);
                if (this.categories) {
                  this.router.navigateByUrl('explore/' + this.categories[0].slug);
                }
              }
        });
        }
    });
      
    }

    onSelectArchitecture($event: NgbTabChangeEvent) {
      this.router.navigateByUrl('explore/' + $event.nextId);
    }


}
