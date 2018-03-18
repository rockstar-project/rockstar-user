import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataResultSet, MetadataService, fadeInAnimation, UtilsService } from 'app/core';
import { ProductService, ProductSearchResult, ProductSearchCriteria, Product } from 'app/core';
import { CapitalizePipe } from './../core';

class SingleSelectList {
        items: Array<any>;
        selection: any;
        settings: any;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class SearchComponent implements OnInit {

    attributefilterkeys = ["architecture", "specification", "language", "framework"];
    optionfilterkeys = ["datastore", "messaging", "security", "monitoring", "gateway", "discovery", "document"];

    attributefilters: Map<string, SingleSelectList>;
    optionfilters: Map<string, MetadataResultSet>;
    productResult: ProductSearchResult;

    /**
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
    */
    

    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private utils: UtilsService,
        private productService: ProductService, 
        private metadataService: MetadataService) { }

    ngOnInit() {
        let searchCriteria = new ProductSearchCriteria();
        searchCriteria.featured = false;
        searchCriteria.state = 'publish';
        searchCriteria.organization = 'rockstar';
        searchCriteria.visibility = 'private';
        searchCriteria.architecture = 'restapi';
        searchCriteria.page = 0;
        searchCriteria.size = 50;
        //this.getMetadata();
        this.getAttributeSearchFilters();
        this.getOptionSearchFilters();
        this.getAllProducts(searchCriteria);
    }

    public getAllProducts(criteria: ProductSearchCriteria) {
        this.productService.searchProducts(criteria)
                        .subscribe(resultset => this.productResult = resultset)
    }

    public getOptionSearchFilters() {
        this.optionfilters = new Map<string, MetadataResultSet>();

        for (let currentfilter of this.optionfilterkeys) {
                this.metadataService.searchMetadata$(currentfilter)
                        .subscribe(resultset => {
                                this.optionfilters.set(currentfilter, resultset);
                        }
                );
        }
    }
    
    public getAttributeSearchFilters() {
        this.attributefilters = new Map<string, SingleSelectList>();

        for (let currentfilter of this.attributefilterkeys) {
                this.metadataService.searchMetadata$(currentfilter)
                        .subscribe(resultset => {
                                this.attributefilters.set(currentfilter, this.loadSelectList(resultset));
                        }
                );
        }

    }

    loadSelectList(metadata: MetadataResultSet) {
        let singleSelectList = null;
        let dropdownList = [];
        let selectedItems = [];
        let settings = null;
        if (metadata) {
                settings = { singleSelection: true, text: metadata._embedded.metadataResourceList[0].group, classes:""};
                for (let current of metadata._embedded.metadataResourceList) {
                        dropdownList.push({"id":current.slug,"itemName":current.title});
                }
                singleSelectList = new SingleSelectList();
                singleSelectList.items = dropdownList;
                singleSelectList.settings = settings;
        }
        return singleSelectList;
    }

    getOptionFilterTitle(key: string) {
        if (key) {
                let optionfilterResultset = this.optionfilters.get(key);
                if (optionfilterResultset) {
                        if (optionfilterResultset._embedded) {
                                if (optionfilterResultset._embedded.metadataResourceList) {
                                        if (optionfilterResultset._embedded.metadataResourceList.length > 0)
                                        return optionfilterResultset._embedded.metadataResourceList[0].group;
                                }
                        }
                }
        }
    }

    getOptionFilterData(key: string) {
        if (key) {
                let optionfilterResultset = this.optionfilters.get(key);
                if (optionfilterResultset) {
                        if (optionfilterResultset._embedded) {
                                return optionfilterResultset._embedded.metadataResourceList;
                        }
                }
        }
    }

    getAttributeFilterSettings(key: string) {
        if (key) {
                let attributefilter = this.attributefilters.get(key);
                if (attributefilter) {
                        return attributefilter.settings;
                }
        }
    }

    getAttributeFilterItems(key: string) {
        if (key) {
                let attributefilter = this.attributefilters.get(key);
                if (attributefilter) {
                        return attributefilter.items;
                }
        }
    }

    getAttributeFilterSelection(key: string) {
        if (key) {
                let attributefilter = this.attributefilters.get(key);
                if (attributefilter) {
                        return attributefilter.selection;
                }
        }
    }

    /** 
    public getMetadata() {
        this.metadataService.searchMetadata$('specification')
                .subscribe(resultset => this.loadSpecificationDropdown(resultset));
        this.metadataService.searchMetadata$('architecture')
                .subscribe(resultset => this.loadArchitectureDropdown(resultset));
        this.metadataService.searchMetadata$('language')
                .subscribe(resultset => this.loadLanguageDropdown(resultset));
        this.metadataService.searchMetadata$('framework')
                .subscribe(resultset => this.loadFrameworkDropdown(resultset));

        this.metadataService.searchMetadata$('datastore')
                .subscribe(resultset => this.datastoreMetadata = resultset);
        this.metadataService.searchMetadata$('messaging')
                .subscribe(resultset => this.messagingMetadata = resultset);
        this.metadataService.searchMetadata$('security')
                .subscribe(resultset => this.securityMetadata = resultset);
        this.metadataService.searchMetadata$('monitoring')
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
                    text:"Architecture",
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
                    text:"Language",
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
                    text:"Framework",
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
                    text:"Specification",
                    classes:""
        };
    }
    */

    getFeaturedOption(item: Product) {
        if (item) {
            for (let current of item.options) {
                if (current.featured) {
                    return current;
                }
            }
        }
    }

    getFeaturedOptionImage(item: Product) {
        let featuredOption = this.getFeaturedOption(item);
        if (featuredOption) {
            return featuredOption.image;
        }
        return null;
    }

    onSelectProduct(url: string) {
        this.router.navigate(['../product', this.utils.resourceId(url)]);
    }
}
