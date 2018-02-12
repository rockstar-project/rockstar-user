import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {SwaggerUIBundle, SwaggerUIStandalonePreset} from 'swagger-ui-dist';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const ui = SwaggerUIBundle({
      //url: "https://api.swaggerhub.com/apis/kickster/storage/1.0.0/swagger.json",
      url: "https://api.swaggerhub.com/apis/rockstar/Collections/1.0.0/swagger.json",
      domNode: this.el.nativeElement.querySelector('.swagger-container'),
      defaultModelsExpandDepth: 0
    })
  }

}
