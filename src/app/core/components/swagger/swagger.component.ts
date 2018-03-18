import { Component, AfterViewInit, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset} from 'swagger-ui-dist';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwaggerComponent implements AfterViewInit {

    @Input()
    schemaUrl;

    constructor(private el: ElementRef) {
    }
  
    ngAfterViewInit() {
      const ui = SwaggerUIBundle({
        url: this.schemaUrl,
        domNode: this.el.nativeElement.querySelector('.swagger-container'),
        defaultModelsExpandDepth: 0
      })
    }
}
