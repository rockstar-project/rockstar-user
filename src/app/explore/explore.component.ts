import { Component, OnInit } from '@angular/core';
import { MetadataResultSet, MetadataService, fadeInAnimation } from 'app/shared';
import { ProductService, Product, ProductSearchResult, ProductSearchCriteria } from 'app/shared';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ExploreComponent implements OnInit {

  restapiFeaturedProducts: Array<Product>;
  spaFeaturedProducts: Array<Product>;
  functionFeaturedProducts: Array<Product>;

  constructor(
    private productService: ProductService, 
    private metadataService: MetadataService) { }

  ngOnInit() {
    this.restapiFeaturedProducts = new Array<Product>();
    this.spaFeaturedProducts = new Array<Product>();
    this.functionFeaturedProducts = new Array<Product>();
    this.productService.searchProducts(this.featuredProductSearchCriteria())
          .subscribe(resultset => {
            if (resultset && resultset._embedded) {
                for (let currentProduct of resultset._embedded.productResourceList) {
                  for (let currentAttribute of currentProduct.attributes) {
                    if (currentAttribute.name === 'architecture') {
                      if (currentAttribute.value === 'restapi') {
                        this.restapiFeaturedProducts.push(currentProduct);
                      } else if (currentAttribute.value === 'spa') {
                        this.spaFeaturedProducts.push(currentProduct);
                      } else if (currentAttribute.value === 'eventdriven') {
                        this.functionFeaturedProducts.push(currentProduct);
                      }
                    }
                }
              }
          }
      })
  }

  private featuredProductSearchCriteria() {
    let searchCriteria = new ProductSearchCriteria();
    searchCriteria.featured = true;
    searchCriteria.visibility = 'public';
    searchCriteria.state = 'publish'
    searchCriteria.featured = true;
    searchCriteria.organization = 'rockstar';
    return searchCriteria;
  }
}
