import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductDetails } from '../shared';
import { MetadataService, Metadata, Option } from '../shared';
import { ArtifactService, Artifact } from '../shared/';
import { saveAs as importedSaveAs } from 'file-saver';
import * as JSZip from 'jszip';
import { Folder, File } from '../shared';

@Component({
  selector: 'app-product-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class ProductPageComponent implements OnInit {

    productDetails: ProductDetails;
    categories: Metadata[];
    schema = 'https://api.swaggerhub.com/apis/kickster/storage/1.0.0/swagger.json';
    schemaname = 'storage';
    codeurl: string;
    schemaContent: string;
    loading = false;
    readme: string;
    files;

    constructor(
        private route: ActivatedRoute, 
        private productService: ProductService,
        private metadataService: MetadataService,
        private artifactService: ArtifactService,
        private location: Location) {
    }

    ngOnInit() {
        this.getProductDetails(this.route.snapshot.params['url']);
        this.getCategories();
     } 

    getProductDetails(url: string) {
        this.productService.getProduct(url)
            .subscribe( result => this.productDetails = result);
    }

    getCategories() {
        this.metadataService.searchMetadata('restapi')
            .subscribe( result => this.categories = result._embedded.metadataResourceList);
    }

    getProductOptionsByCategory(category: string) {
        const matchingOptions = new Array<Option>();

        for (let currentOption of this.productDetails.options) {
            const optiontags = currentOption.tags;
            if (optiontags && optiontags.length > 0) {
                if (optiontags.indexOf(category) > - 1) {
                    matchingOptions.push(currentOption);
                }
            }
        }

        return matchingOptions;
    }

    backClicked() {
        this.location.back();
    }

    onTabClicked($event: NgbTabChangeEvent) {
        
        if ($event.nextId === 'code') {
            this.generateArtifact();
        }  
    }

    generateArtifact() {
        const artifact = new Artifact();
        artifact.namespace = 'storage';
        artifact.organization = 'gravitant';
        artifact.type = this.getValue('architecture');
        artifact.framework = this.getValue('framework');
        artifact.language = this.getValue('language');
        artifact.specification = this.schema;
        artifact.options = new Map<string, string>();
        artifact.options.set('datastore', 'mysql');
        artifact.options.set('discovery', 'eureka');
        artifact.options.set('ci', 'travis');
        artifact.options.set('registry', 'docker');

        this.artifactService.createArtifact(artifact)
                .subscribe(resultset => {
                    this.artifactService.downloadArtifact(resultset)
                        .subscribe((data: Blob) => {
                            const zipfile = new JSZip();
                            zipfile.loadAsync(data).then(
                            zip => {
                                this.files = new Map<string, string>();
                                for (const filepath of Object.keys(zip.files)) {
                                zip.file(filepath).async('text')
                                    .then(
                                        fileData => {
                                            this.files.set(filepath, fileData);
                                        }
                                    );
                                }
                            });
                        });
                })
    }
    
    downloadAndSave() {
        this.artifactService.downloadArtifact(this.codeurl)
          .subscribe(data => importedSaveAs(data, this.getZipfilename()));
    }
    
    validateSchema() {
        this.artifactService.validateSchema(this.schema)
            .subscribe(resultset => {
              console.log('response: ' + resultset);
            });
    }
    
    getZipfilename() {
        var zipfilename;
        const architecture = this.getValue('architecture');
        const language = this.getValue('language');
        const framework = this.getValue('framework');

        if (architecture && language && framework) {
            zipfilename = architecture + '-' + language + '-' + framework + '-' + this.schemaname + '.zip';
        }
        return zipfilename;
    }
    
    getAttribute(name: string) {
        if (this.productDetails) {
            for (let current of this.productDetails.attributes) {
                if (current.name === name) {
                    return current;
                }
            }
        }
    }

    getValue(name: string) {
        let value = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            value = attribute.value;
        }
        return value;
    }

    getTitle(name: string) {
        if (this.productDetails) {
            for (let current of this.productDetails.attributes) {
                if (current.name === name) {
                    return current.title;
                }
            }
        }
    }

    getImage(name: string) {
        if (this.productDetails) {
            for (let current of this.productDetails.attributes) {
                if (current.name === name) {
                    return current.image;
                }
            }
        }
    }

}
