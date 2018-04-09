import { Component, OnInit} from '@angular/core';
import { ProductService, Product, Option} from '../../core';
import { ActivatedRoute } from '@angular/router';
import { AttributePipe, OptionPipe } from '../../core';
import { ArtifactService, Artifact, SelectedValue } from '../../core/';

@Component({
  selector: 'app-design-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private artifactService: ArtifactService,
    private attributePipe: AttributePipe,
    private optionPipe: OptionPipe) {}

  ngOnInit() {
    this.getProduct(this.route.snapshot.parent.params['id']);
  }

  getProduct(id: string) {
    this.productService.getProduct(id)
        .subscribe( result => {
            if (result) {
                this.product = result;
            }
        });
    }

    submit() {
        const options = new Map<string, SelectedValue>();
        const artifact = new Artifact();
        const productAttributes = this.product.attributes;
        const productOptions = this.product.options;
        
        artifact.name = "collection";
        artifact.organization = "cookery";
        artifact.schema = this.product.schema_url;

        if (productAttributes) {
            if (productAttributes.findIndex(a => a.name == 'specification') !== -1) {
                const spec = new SelectedValue();
                spec.value = this.attributePipe.transform(productAttributes, 'specification', 'value');
                spec.version = this.attributePipe.transform(productAttributes, 'specification', 'version');
                artifact.specification = spec;
            }
        
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
            artifact.architecture = architecture;
        }

        const datastore = new SelectedValue();
        datastore.value = this.optionPipe.transform(productOptions, 'datastore', 'value');
        datastore.version = this.optionPipe.transform(productOptions, 'datastore', 'version');
    
        const http = new SelectedValue();
        http.value = this.optionPipe.transform(productOptions, 'http', 'value');
        http.version = this.optionPipe.transform(productOptions, 'http', 'version');
    
        const discovery = new SelectedValue();
        discovery.value = this.optionPipe.transform(productOptions, 'discovery', 'value');
        discovery.version = this.optionPipe.transform(productOptions, 'discovery', 'version');
    
        const messaging = new SelectedValue();
        messaging.value = this.optionPipe.transform(productOptions, 'messaging', 'value');
        messaging.version = this.optionPipe.transform(productOptions, 'messaging', 'version');
    
        const tracing = new SelectedValue();
        tracing.value = this.optionPipe.transform(productOptions, 'tracing', 'value');
        tracing.version = this.optionPipe.transform(productOptions, 'tracing', 'version');
    
        const monitoring = new SelectedValue();
        monitoring.value = this.optionPipe.transform(productOptions, 'monitoring', 'value');
        monitoring.version = this.optionPipe.transform(productOptions, 'monitoring', 'version');
    
        const security = new SelectedValue();
        security.value = this.optionPipe.transform(productOptions, 'security', 'value');
        security.version = this.optionPipe.transform(productOptions, 'security', 'version');
    
        const ci = new SelectedValue();
        ci.value = this.optionPipe.transform(productOptions, 'ci', 'value');
        ci.version = this.optionPipe.transform(productOptions, 'ci', 'version');
    
        const cd = new SelectedValue();
        cd.value = this.optionPipe.transform(productOptions, 'cd', 'value');
        cd.version = this.optionPipe.transform(productOptions, 'cd', 'version');
    
        const scm = new SelectedValue();
        scm.value = this.optionPipe.transform(productOptions, 'scm', 'value');
        scm.version = this.optionPipe.transform(productOptions, 'scm', 'version');
    
        const registry = new SelectedValue();
        registry.value = this.optionPipe.transform(productOptions, 'registry', 'value');
        registry.version = this.optionPipe.transform(productOptions, 'registry', 'version');
    
        const build = new SelectedValue();
        build.value = this.optionPipe.transform(productOptions, 'build', 'value');
        build.version = this.optionPipe.transform(productOptions, 'build', 'version');
    
        const test = new SelectedValue();
        test.value = this.optionPipe.transform(productOptions, 'test', 'value');
        test.version = this.optionPipe.transform(productOptions, 'test', 'version');
    
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
            })
    }

}