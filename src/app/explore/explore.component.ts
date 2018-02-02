import { Component, OnInit } from '@angular/core';
import { MetadataResultSet, MetadataService } from 'app/shared';
import { ProductService, ProductSearchResult, ProductSearchCriteria } from 'app/shared';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {

  architectureMetadata: MetadataResultSet;
  featuredProductResult: ProductSearchResult;

  constructor(private productService: ProductService, private metadataService: MetadataService) { }

  ngOnInit() {
    this.getMetadata();
    this.searchProducts('restapi');
  }

  onTabClicked($event: NgbTabChangeEvent) {
    this.searchProducts($event.nextId);
}

  public searchProducts(architecture: string) {
    const searchCriteria = this.newProductSearchCriteria();
    searchCriteria.architecture = architecture;
    this.getProducts(this.newProductSearchCriteria());
  }


  public getProducts(criteria: ProductSearchCriteria) {
      this.productService.searchProducts(criteria)
                      .subscribe(resultset => this.featuredProductResult = resultset)
  }

  public getMetadata() {
    this.metadataService.searchMetadata('architecture')
            .subscribe(resultset => this.architectureMetadata = resultset);
  }

  private newProductSearchCriteria() {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.featured = true;
    searchCriteria.state = 'publish';
    searchCriteria.organization = 'rockstar';
    return searchCriteria;
  }

}
