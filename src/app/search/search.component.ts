import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MicroserviceService, fadeInAnimation, UtilsService, listAnimation, Architecture, Runtime, Schema, Capability } from 'app/core';
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
  animations: [ listAnimation ]
})
export class SearchComponent implements OnInit {

    sub: any;
    private _opened: boolean = false;
    
    selectedCapability: Capability;

    productResult: ProductSearchResult;
    searchCriteria: ProductSearchCriteria;

    specificationList = [];
    specificationSelectedItems = [];
    specificationDropdownSettings = {};
    
    architectureList = [];
    architectureSelectedItems = [];
    architectureDropdownSettings = {};

    languageList = [];
    languageSelectedItems = [];
    languageDropdownSettings = {};

    capabilities: Array<Capability>; 
   
    constructor(
        private router: Router, 
        private route: ActivatedRoute, 
        private utils: UtilsService,
        private productService: ProductService, 
        private microserviceService: MicroserviceService) { }

    ngOnInit() {
        this.productResult = this.route.snapshot.data['products'];
        this.getAttributes();
        this.getCapabilities();
    }

    public getAttributes() {
        this.microserviceService.getSchemas()
                .subscribe(resultset => this.loadSchemasDropdown(resultset));
        this.microserviceService.getArchitectures()
                .subscribe(resultset => this.loadArchitecturesDropdown(resultset));
        this.microserviceService.getRuntimes()
                .subscribe(resultset => this.loadRuntimesDropdown(resultset));
    }

    public getCapabilities() {
        this.microserviceService.getCapabilities(null)
                .subscribe(resultset => {
                        if (resultset) {
                                this.capabilities = resultset;
                                for (let currentCapability of resultset) {
                                        this.microserviceService.getCapability(currentCapability.slug)
                                                .subscribe(capabilityItem => {
                                                        currentCapability.subcapabilities = capabilityItem.subcapabilities;
                                                }
                                        );
                                }
                        }
                })
        
    }

    loadArchitecturesDropdown(architectures: Array<Architecture>) {
        this.architectureList = [];
        if (architectures) {
                for (let current of architectures) {
                        if (current.enabled) {
                                this.architectureList.push({"id":current.slug,"itemName":current.title});
                        }
                }
        }
        this.architectureSelectedItems = [];
        this.architectureDropdownSettings = {
                    singleSelection: true,
                    text:"Architecture",
                    classes:""
        };
    }

    loadRuntimesDropdown(runtimes: Array<Runtime>) {
        this.languageList = [];
        if (runtimes) {
                for (let current of runtimes) {
                        if (current.enabled) {
                                this.languageList.push({"id":current.slug,"itemName":current.title});
                        }
                }
        }
        this.languageSelectedItems = [];
        this.languageDropdownSettings = {
                    singleSelection: true,
                    text:"Language",
                    classes:""
        };
    }

    loadSchemasDropdown(schemas: Array<Schema>) {
        this.specificationList = [];
        if (schemas) {
                for (let current of schemas) {
                        if (current.enabled) {
                                this.specificationList.push({"id":current.slug,"itemName":current.title});
                        }
                }
        }
        this.specificationSelectedItems = [];
        this.specificationDropdownSettings = {
                    singleSelection: true,
                    text:"Schema",
                    classes:""
        };
    }

    onSelectProduct(url: string) {
        if (url) {
                this.router.navigateByUrl("/product/" + this.utils.resourceId(url) + '/(overview//sidebar:options)');
        }
    }

    toggleSidebar(slug: string) {
        this._opened = !this._opened;
        if (slug) {
                this.selectedCapability = this.capabilities.find(c => c.slug === slug);
        }
    }

}
