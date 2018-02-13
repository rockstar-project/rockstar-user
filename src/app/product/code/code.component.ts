import { ViewChild, HostBinding, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductService, Product } from '../../shared';
import { ArtifactService, Artifact, Specification, SelectedValue } from '../../shared/';
import { saveAs as importedSaveAs } from 'file-saver';
import * as JSZip from 'jszip';
import { Folder, File } from '../../shared';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input()
  productDetails: Product;

  schema = 'https://api.swaggerhub.com/apis/kickster/storage/1.0.0/swagger.json';
  schemaname = 'storage';
  codeurl: string;

  selectedfile: File;
  files: File[] = new Array<File>();
  folders: Folder[] = new Array<Folder>();
  
  options:any = {
      animatedScroll: true,
      showGutter: false,
      showPrintMargin: false,
      highlightActiveLine: false
  };

  constructor(
        private route: ActivatedRoute, 
        private productService: ProductService, 
        private artifactService: ArtifactService) {
  }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.parent.params['url']);
  }


  getProductDetails(url: string) {
      this.productService.getProduct(url)
            .subscribe( result => {
                this.productDetails = result;
                this.generateArtifact();
            });
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
                    const sourcecode = new Map<string, string>();
                    zipfile.loadAsync(data).then(
                        zip => {
                        
                        for (const filepath of Object.keys(zip.files)) {
                            zip.file(filepath).async('text')
                                .then(
                                    fileData => {
                                        this.createFile(filepath, fileData);
                                        if (filepath === 'README.md') {
                                            this.onSelectFile('resources', 'README.md');
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
    let tokens: Array<string>;
    if (filepath && filepath.indexOf('/') > 0) { 
        tokens = filepath.split('/');
        if (tokens && tokens.length > 0) {
            const foldername = tokens[tokens.length - 2];
            if (this.folders.findIndex(f => f.name === foldername) === -1) {
                folder = new Folder();
                folder.name = foldername;
                this.folders.push(folder);
            } else {
                const folder = this.folders.find(f => f.name === foldername);
                if (folder) {
                    const file = new File();
                    const filename = tokens[tokens.length - 1];
                    
                    let fileparts = filename.split('.');

                    if (fileparts && fileparts.length > 0) {
                        file.name = filename;
                        file.path = filepath;
                        file.ext = toAceFileExt(fileparts[1]);
                        file.content = filedata;
                        folder.files.push(file);
                    }
                }
              }
        }
    } else {
        let fileparts = filepath.split('.');
        if (fileparts && fileparts.length > 0) {
            file = new File();
            file.name = filepath;
            file.path = filepath;
            file.ext = toAceFileExt(fileparts[1]);
            file.content = filedata;
            let folder = this.folders.find(f => f.name === 'resources');
            if (!folder) {
                folder = new Folder();
                folder.name = 'resources';
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
        if (this.productDetails.options && this.productDetails.options.length > 0) {
            for (let current of this.productDetails.options) {
                if (current.name === name) {
                    return current;
                }
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

}

function toAceFileExt(value: string) : string{
    let aceFileExt: string = null;
    if (value) {
        switch (value) {
            case 'md': 
                aceFileExt = 'markdown';
                break;
            case 'yml': 
                aceFileExt = 'yaml';
                break;
            default:
                aceFileExt = value;
                break;
        }
    }
    return aceFileExt;
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

