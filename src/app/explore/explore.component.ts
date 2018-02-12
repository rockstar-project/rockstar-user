import { Component, OnInit } from '@angular/core';
import { MetadataResultSet, MetadataService, fadeInAnimation } from 'app/shared';
import { ProductService, ProductSearchResult, ProductSearchCriteria } from 'app/shared';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ExploreComponent implements OnInit {

  restapiFeaturedProductResult: ProductSearchResult;
  spaFeaturedProductResult: ProductSearchResult;

  constructor(private productService: ProductService, private metadataService: MetadataService) { }

  ngOnInit() {
    this.productService.searchProducts(this.restapiFeaturedProductSearchCriteria())
          .subscribe(resultset => this.restapiFeaturedProductResult = resultset)

    this.productService.searchProducts(this.spaFeaturedProductSearchCriteria())
          .subscribe(resultset => this.spaFeaturedProductResult = resultset)
    
  }

  private restapiFeaturedProductSearchCriteria() {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.featured = true;
    searchCriteria.architecture = 'restapi';
    searchCriteria.state = 'publish'
    searchCriteria.featured = true;
    searchCriteria.organization = 'rockstar';
    return searchCriteria;
  }

  private spaFeaturedProductSearchCriteria() {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.featured = true;
    searchCriteria.architecture = 'spa';
    searchCriteria.state = 'publish';
    searchCriteria.featured = true;
    searchCriteria.organization = 'rockstar';
    return searchCriteria;
  }

}
