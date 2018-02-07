import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductDetails, SelectedValue } from '../shared';
import { MetadataService, Metadata, Option } from '../shared';
import { ArtifactService, Artifact, Specification } from '../shared/';
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
        const options = new Map<string, SelectedValue>();
        const artifact = new Artifact();
        const spec = new Specification();
        spec.type = this.getAttributeValue('specification');
        spec.version = this.getAttributeVersion('specification');
        spec.location = this.schema;

        const language = new SelectedValue();
        language.value = this.getAttributeValue('language');
        language.version = this.getAttributeVersion('language');

        const framework = new SelectedValue();
        framework.value = this.getAttributeValue('framework');
        framework.version = this.getAttributeVersion('framework');

        artifact.namespace = this.schemaname;
        artifact.organization = 'gravitant';
        artifact.type = this.getAttributeValue('architecture');
        artifact.framework = framework;
        artifact.language = language;
        artifact.specification = spec;

        const datastore = new SelectedValue();
        datastore.value = this.getOptionValue('datastore');
        datastore.version = this.getOptionVersion('datastore');

        const http = new SelectedValue();
        http.value = this.getOptionValue('http');
        http.version = this.getOptionVersion('http');

        const discovery = new SelectedValue();
        discovery.value = this.getOptionValue('discovery');
        discovery.version = this.getOptionVersion('discovery');

        const messaging = new SelectedValue();
        messaging.value = this.getOptionValue('messaging');
        messaging.version = this.getOptionVersion('messaging');

        const tracing = new SelectedValue();
        tracing.value = this.getOptionValue('tracing');
        tracing.version = this.getOptionVersion('tracing');

        const monitoring = new SelectedValue();
        monitoring.value = this.getOptionValue('monitoring');
        monitoring.version = this.getOptionVersion('monitoring');

        const security = new SelectedValue();
        security.value = this.getOptionValue('security');
        security.version = this.getOptionVersion('security');

        const ci = new SelectedValue();
        ci.value = this.getOptionValue('ci');
        ci.version = this.getOptionVersion('ci');

        const cd = new SelectedValue();
        cd.value = this.getOptionValue('cd');
        cd.version = this.getOptionVersion('cd');

        const scm = new SelectedValue();
        scm.value = this.getOptionValue('scm');
        scm.version = this.getOptionVersion('scm');

        const registry = new SelectedValue();
        registry.value = this.getOptionValue('registry');
        registry.version = this.getOptionVersion('registry');

        const build = new SelectedValue();
        build.value = this.getOptionValue('build');
        build.version = this.getOptionVersion('build');

        const test = new SelectedValue();
        test.value = this.getOptionValue('test');
        test.version = this.getOptionVersion('test');

        artifact.datastore = datastore;
        artifact.http = http;
        artifact.messaging = messaging;
        artifact.discovery = discovery;
        artifact.monitoring = monitoring;
        artifact.security = security;
        artifact.tracing = tracing;
        artifact.build = build;
        artifact.test = test;
        artifact.ci = ci;
        artifact.cd = cd;
        artifact.scm = scm;
        artifact.registry = registry;

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
        const architecture = this.getAttributeValue('architecture');
        const language = this.getAttributeValue('language');
        const framework = this.getAttributeValue('framework');

        if (architecture && language && framework) {
            zipfilename = architecture + '-' + language + '-' + framework + '-' + this.schemaname + '.zip';
        }
        return zipfilename;
    }

    private getOption(name: string) {
        if (this.productDetails) {
            for (let current of this.productDetails.options) {
                if (current.name === name) {
                    return current;
                }
            }
        }
    }

    private getOptionValue(name: string) {
        let value = null;
        const option = this.getOption(name);
        if (option) {
            value = option.value;
        }
        return value;
    }

    private getOptionVersion(name: string) {
        let version = null;
        const option = this.getOption(name);
        if (option) {
            version = option.version;
        }
        return version;
    }
    
    private getAttribute(name: string) {
        if (this.productDetails) {
            for (let current of this.productDetails.attributes) {
                if (current.name === name) {
                    return current;
                }
            }
        }
    }

    private getAttributeValue(name: string) {
        let value = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            value = attribute.value;
        }
        return value;
    }

    private getAttributeTitle(name: string) {
        let title = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            title = attribute.title;
        }
        return title;
    }

    private getAttributeVersion(name: string) {
        let version = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            version = attribute.version;
        }
        return version;
    }

    private  getAttributeImage(name: string) {
        let image = null;
        const attribute = this.getAttribute(name);
        if (attribute) {
            image = attribute.image;
        }
        return image;
    }

}
