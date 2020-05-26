import { ViewChild, HostBinding, Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../../core';
import { Observable } from 'rxjs';
import { ProductService, Product, AttributePipe, OptionPipe } from '../../core';
import { ArtifactService, Artifact, Specification, SelectedValue } from '../../core/';
import { SchemaService } from '../../core';
import { saveAs as importedSaveAs } from 'file-saver';
import * as JSZip from 'jszip';
import { Folder, File } from '../../core';
import { HighlightService } from './highlight.service';

const DEFAULT_ORG = 'cookery';
const DEFAULT_NAME = 'collection';

@Component({
  selector: 'app-develop-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  animations: [ fadeAnimation ]
})
export class CodeComponent implements OnInit, AfterViewChecked {
  private _opened: boolean = true;
  productDetails: Product;
  codeurl: string;
  readme: any;
  highlighted: boolean = false;

  selectedfile: File;
  files: File[] = new Array<File>();

  folders: Folder[] = new Array<Folder>();

  constructor(
        private route: ActivatedRoute, 
        private highlightService: HighlightService,
        private productService: ProductService, 
        private artifactService: ArtifactService,
        private schemaService: SchemaService,
        private attributePipe: AttributePipe,
        private optionPipe: OptionPipe) {
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.parent.params['id']);
  }

  getProductDetails(id: string) {
      this.productService.getProduct(id)
            .subscribe( result => {
                this.productDetails = result;
                this.generateArtifact();
            });
  }

  generateArtifact() {
    const options = new Map<string, SelectedValue>();
    const artifact = new Artifact();
    const productAttributes = this.productDetails.attributes;
    const productOptions = this.productDetails.options;

    artifact.name = DEFAULT_NAME
    artifact.organization = DEFAULT_ORG;
    artifact.schema =  this.productDetails.schema_url;

    if (productAttributes) {
        const spec = new SelectedValue();
        spec.value = this.attributePipe.transform(productAttributes, 'specification', 'value');
        spec.version = this.attributePipe.transform(productAttributes, 'specification', 'version');
        artifact.specification = spec;

        const language = new SelectedValue();
        language.value = this.attributePipe.transform(productAttributes, 'language', 'value');
        language.version = this.attributePipe.transform(productAttributes, 'language', 'version');
        artifact.language = language;

        const framework = new SelectedValue();
        framework.value = this.attributePipe.transform(productAttributes, 'framework', 'value');
        framework.version = this.attributePipe.transform(productAttributes, 'framework', 'version');
        artifact.framework = framework;

        const architecture = new SelectedValue();
        architecture.value = this.attributePipe.transform(productAttributes, 'architecture', 'value');
        architecture.version = this.attributePipe.transform(productAttributes, 'architecture', 'version');
        artifact.architecture = architecture;
    }
    
    if (productOptions) {

        const datastore = new SelectedValue();
        datastore.value = this.optionPipe.transform(productOptions, 'datastore', 'value');
        datastore.version = this.optionPipe.transform(productOptions, 'datastore', 'version');
        artifact.datastore = datastore;

        const http = new SelectedValue();
        http.value = this.optionPipe.transform(productOptions, 'http', 'value');
        http.version = this.optionPipe.transform(productOptions, 'http', 'version');
        artifact.http = http;
        
        const discovery = new SelectedValue();
        discovery.value = this.optionPipe.transform(productOptions, 'discovery', 'value');
        discovery.version = this.optionPipe.transform(productOptions, 'discovery', 'version');
        artifact.discovery = discovery;
        
        const messaging = new SelectedValue();
        messaging.value = this.optionPipe.transform(productOptions, 'messaging', 'value');
        messaging.version = this.optionPipe.transform(productOptions, 'messaging', 'version');
        artifact.messaging = messaging;

        const tracing = new SelectedValue();
        tracing.value = this.optionPipe.transform(productOptions, 'tracing', 'value');
        tracing.version = this.optionPipe.transform(productOptions, 'tracing', 'version');
        artifact.tracing = tracing;
        
        const monitoring = new SelectedValue();
        monitoring.value = this.optionPipe.transform(productOptions, 'monitoring', 'value');
        monitoring.version = this.optionPipe.transform(productOptions, 'monitoring', 'version');
        artifact.monitoring = monitoring;

        const security = new SelectedValue();
        security.value = this.optionPipe.transform(productOptions, 'security', 'value');
        security.version = this.optionPipe.transform(productOptions, 'security', 'version');
        artifact.security = security;

        const ci = new SelectedValue();
        ci.value = this.optionPipe.transform(productOptions, 'ci', 'value');
        ci.version = this.optionPipe.transform(productOptions, 'ci', 'version');
        artifact.ci = ci;
        
        const cd = new SelectedValue();
        cd.value = this.optionPipe.transform(productOptions, 'cd', 'value');
        cd.version = this.optionPipe.transform(productOptions, 'cd', 'version');
        artifact.cd = cd;
        
        const scm = new SelectedValue();
        scm.value = this.optionPipe.transform(productOptions, 'scm', 'value');
        scm.version = this.optionPipe.transform(productOptions, 'scm', 'version');
        artifact.scm = scm;

        const registry = new SelectedValue();
        registry.value = this.optionPipe.transform(productOptions, 'registry', 'value');
        registry.version = this.optionPipe.transform(productOptions, 'registry', 'version');
        artifact.registry = registry;

        const build = new SelectedValue();
        build.value = this.optionPipe.transform(productOptions, 'build', 'value');
        build.version = this.optionPipe.transform(productOptions, 'build', 'version');
        artifact.build = build;

        const test = new SelectedValue();
        test.value = this.optionPipe.transform(productOptions, 'test', 'value');
        test.version = this.optionPipe.transform(productOptions, 'test', 'version');
        artifact.test = test;
    }
    
    this.artifactService.createArtifact(artifact)
        .subscribe(resultset => {
            console.log('artifact created: ' + resultset);
            this.artifactService.downloadArtifact('' + resultset)
                .subscribe((data: Blob) => {
                    const zipfile = new JSZip();
                    const sourcecode = new Map<string, string>();
                    zipfile.loadAsync(data).then(
                        zip => {
                        
                        for (const filepath of Object.keys(zip.files)) {
                            zip.file(filepath).async('text')
                                .then(
                                    fileData => {
                                        let directory = filepath.substr(filepath.indexOf('/') + 1, filepath.length);
                                        
                                        this.createFile(directory, fileData);
                                        if (directory === 'README.md') {
                                            this.readme = fileData;
                                            this.onSelectFile('Other', 'README.md');
                                        }
                                        
                                    }
                                );
                        }
                    });
                });
        })
}

private createFile(filepath: string, filedata) {
    let folder = null;
    let file = null;
    
    if (filepath && filepath.indexOf('/') > 0) { 
       
        const folderpath = filepath.substr(0, filepath.lastIndexOf('/'));
        
        if (folderpath && folderpath.length > 0) {
            
            const foldername = folderpath.substr(folderpath.lastIndexOf('/') + 1, folderpath.length);
            folder = this.folders.find(f => f.name === foldername);
            if (!folder) {
                folder = new Folder();
                folder.name = foldername;
                this.folders.push(folder);
            } 
               
            file = new File();
                    
            const filename = filepath.substr(filepath.lastIndexOf('/') + 1, filepath.length);
            let fileparts = filename.split('.');

            if (fileparts && fileparts.length > 0) {
                file.name = filename;
                file.path = filepath;
                file.ext = fileparts[1];
                file.content = filedata;
                folder.files.push(file);
            }
        }
    } else {
        let fileparts = filepath.split('.');
        if (fileparts && fileparts.length > 0) {
            file = new File();
            file.name = filepath;
            file.path = filepath;
            file.ext = fileparts[1];
            file.content = filedata;
            let folder = this.folders.find(f => f.name === 'Other');
            if (!folder) {
                folder = new Folder();
                folder.name = 'Other';
                this.folders.push(folder);
            }
            folder.files.push(file);
        }
    }
    
}

downloadAndSave() {
    this.artifactService.downloadArtifact(this.codeurl)
      .subscribe(data => importedSaveAs(data, this.getZipfilename()));
}

validateSchema() {
    if (this.productDetails) {
        this.schemaService.validateSchema(this.productDetails.schema_url)
            .subscribe(resultset => {
        });
    }
}

getZipfilename() {
    var zipfilename;
    const architecture = this.attributePipe.transform(this.productDetails.attributes, 'architecture', 'value');
    const language = this.attributePipe.transform(this.productDetails.attributes, 'language', 'value');
    const framework = this.attributePipe.transform(this.productDetails.attributes, 'framework', 'value');

    if (architecture && language && framework) {
        zipfilename = architecture + '-' + language + '-' + framework + '.zip';
    }
    return zipfilename;
}


  onSelectFile(foldername: string, filename: string) {
    let folder: Folder;
    let file: File;
    if (foldername) {
        if (filename) {
            folder = this.folders.find(f => f.name === foldername);
            this.selectedfile = folder.files.find(fi => fi.name == filename ); 
        }
    } else {
        if (filename) {
            this.selectedfile = this.files.find(fi => fi.name == filename);
        }
    }
  }

  toggleCodeMenu() {
      console.log("code menu toggled");
  }
}

function parse(paths) {
    const parsed = {};
    for (let i = 0; i < paths.length; i++) {
        let position = parsed;
        const split = paths[i].split('/');
        for (let j = 0; j < split.length; j++) {
            if (split[j] !== '') {
                if (typeof position[split[j]] === 'undefined') {
                    position[split[j]] = {};
                }
                position = position[split[j]];
            }
        }
    }
    return parsed;
}

