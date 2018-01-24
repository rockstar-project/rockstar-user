import { Component, OnInit } from '@angular/core';
import { MetadataResultSet, MetadataService } from 'app/shared';
import { ProductService, ProductSearchResult, ProductSearchCriteria } from 'app/shared';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  architectureMetadata: MetadataResultSet;
  featuredProductResult: ProductSearchResult;

  constructor(private productService: ProductService, private metadataService: MetadataService) { }

  ngOnInit() {
    let featuredCriteria = new ProductSearchCriteria();
    featuredCriteria.featured = true;
    featuredCriteria.state = 'publish';
    featuredCriteria.organization = 'rockstar';
    this.getFeaturedProducts(featuredCriteria);
    this.getMetadata();
  }


  public getFeaturedProducts(criteria: ProductSearchCriteria) {
      this.productService.searchProducts(criteria)
                      .subscribe(resultset => this.featuredProductResult = resultset)
  }

  public getMetadata() {
    this.metadataService.searchMetadata('architecture')
            .subscribe(resultset => this.architectureMetadata = resultset);
  }

}
