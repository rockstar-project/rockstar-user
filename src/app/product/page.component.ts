import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductDetails } from '../shared';
import { MetadataService, Metadata, Option } from '../shared';
import { GeneratorService } from '../shared/';
import { saveAs as importedSaveAs } from 'file-saver';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-product-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class ProductPageComponent implements OnInit {

    productDetails: ProductDetails;
    categories: Metadata[];
    schema = 'http://petstore.swagger.io/v2/swagger.json';
    schemaname = 'petstore';
    codeurl: string;
    schemaContent: string;
    loading = false;
    readme: string;
    files;

    constructor(
        private route: ActivatedRoute, 
        private productService: ProductService,
        private metadataService: MetadataService,
        private generatorService: GeneratorService,
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
            this.generateCode();
        }  
    }

    generateCode() {
        console.log("generating code...");
        const language = this.getValue('language');
        const framework = this.getValue('framework');

        if (language && framework) {
            this.generatorService.generateCode(this.schema, this.toFrameworkName(language, framework))
                .subscribe(resultset => {
                    return this.generatorService.downloadCode(resultset)
                    .subscribe((data: Blob) => {
                        const zipfile = new JSZip();
                        zipfile.loadAsync(data).then(
                        zip => {
                            this.files = new Map<string, string>();
                            for (const filepath of Object.keys(zip.files)) {
                            zip.file(filepath).async('text')
                                .then(
                                    fileData => {
                                        console.log(filepath);
                                        this.files.set(filepath, fileData);
                                    }
                                );
                            }
                        });
                    }
                    );
                });
        }
      }
    
    downloadAndSave() {
        this.generatorService.downloadCode(this.codeurl)
          .subscribe(data => importedSaveAs(data, this.getZipfilename()));
    }
    
    validateSchema() {
        this.generatorService.validateSchema(this.schema)
            .subscribe(resultset => {
              console.log('response: ' + resultset);
            });
    }
    
    getZipfilename() {
        var zipfilename;
        const language = this.productDetails.getAttribute('language');
        const framework = this.productDetails.getAttribute('framework');

        if (language && framework) {
            zipfilename = language.value + '-' + framework.value + '-' + this.schemaname + '.zip';
        }
        return zipfilename;
    }
    
      toFrameworkName(language: string, framework: string) {
        let name: string;
        if (language && framework) {
          if (language === 'java' && framework === 'springboot') {
            name = 'spring';
          } else if (language === 'golang') {
            name = 'go-server';
          } else if (language === 'nodejs') {
            name = 'nodejs-server';
          } else if (language === 'python' && framework === 'flask') {
            name = 'python-flask';
          } else if (language === 'csharp') {
            name = 'aspnetcore';
          }
        }
        return name;
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
