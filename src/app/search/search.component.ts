import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataResultSet, MetadataService } from 'app/shared';
import { ProductService, ProductSearchResult, ProductSearchCriteria } from 'app/shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

    
    specificationList = [];
    specificationSelectedItems = [];
    specificationDropdownSettings = {};

    architectureList = [];
    architectureSelectedItems = [];
    architectureDropdownSettings = {};

    languageList = [];
    languageSelectedItems = [];
    languageDropdownSettings = {};

    frameworkList = [];
    frameworkSelectedItems = [];
    frameworkDropdownSettings = {};

    datastoreMetadata: MetadataResultSet;
    messagingMetadata: MetadataResultSet;
    securityMetadata: MetadataResultSet;
    monitoringMetadata: MetadataResultSet;
    
    productResult: ProductSearchResult;

    constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private metadataService: MetadataService) { }

    ngOnInit() {
        let searchCriteria = new ProductSearchCriteria();
        searchCriteria.featured = false;
        searchCriteria.state = 'publish';
        searchCriteria.organization = 'rockstar';
        this.getMetadata();
        this.getAllProducts(searchCriteria);
    }

    public getAllProducts(criteria: ProductSearchCriteria) {
        this.productService.searchProducts(criteria)
                        .subscribe(resultset => this.productResult = resultset)
    }

    public getMetadata() {
        this.metadataService.searchMetadata('specification')
                .subscribe(resultset => this.loadSpecificationDropdown(resultset));
        this.metadataService.searchMetadata('architecture')
                .subscribe(resultset => this.loadArchitectureDropdown(resultset));
        this.metadataService.searchMetadata('language')
                .subscribe(resultset => this.loadLanguageDropdown(resultset));
        this.metadataService.searchMetadata('framework')
                .subscribe(resultset => this.loadFrameworkDropdown(resultset));

        this.metadataService.searchMetadata('datastore')
                .subscribe(resultset => this.datastoreMetadata = resultset);
        this.metadataService.searchMetadata('messaging')
                .subscribe(resultset => this.messagingMetadata = resultset);
        this.metadataService.searchMetadata('security')
                .subscribe(resultset => this.securityMetadata = resultset);
        this.metadataService.searchMetadata('monitoring')
                .subscribe(resultset => this.monitoringMetadata = resultset);
    }

    loadArchitectureDropdown(metadata: MetadataResultSet) {
        this.architectureList = [];
        if (metadata) {
                for (let current of metadata._embedded.metadataResourceList) {
                        this.architectureList.push({"id":current.slug,"itemName":current.title});
                }
        }
        this.architectureSelectedItems = [];
        this.architectureDropdownSettings = {
                    singleSelection: true,
                    text:"Select Architecture",
                    classes:""
        };
    }

    loadLanguageDropdown(metadata: MetadataResultSet) {
        this.languageList = [];
        if (metadata) {
                for (let current of metadata._embedded.metadataResourceList) {
                        this.languageList.push({"id":current.slug,"itemName":current.title});
                }
        }
        this.languageSelectedItems = [];
        this.languageDropdownSettings = {
                    singleSelection: true,
                    text:"Select Language",
                    classes:""
        };
    }

    loadFrameworkDropdown(metadata: MetadataResultSet) {
        this.frameworkList = [];
        if (metadata) {
                for (let current of metadata._embedded.metadataResourceList) {
                        this.frameworkList.push({"id":current.slug,"itemName":current.title});
                }
        }
        this.frameworkSelectedItems = [];
        this.frameworkDropdownSettings = {
                    singleSelection: true,
                    text:"Select Framework",
                    classes:""
        };
    }

    loadSpecificationDropdown(metadata: MetadataResultSet) {
        this.specificationList = [];
        if (metadata) {
                for (let current of metadata._embedded.metadataResourceList) {
                        this.specificationList.push({"id":current.slug,"itemName":current.title});
                }
        }
        this.specificationSelectedItems = [];
        this.specificationDropdownSettings = {
                    singleSelection: true,
                    text:"Select Specification",
                    classes:""
        };
    }
}
