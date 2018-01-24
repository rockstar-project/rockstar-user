import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {SwaggerUIBundle, SwaggerUIStandalonePreset} from 'swagger-ui-dist';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss']
})
export class SwaggerComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const ui = SwaggerUIBundle({
      url: "https://api.swaggerhub.com/apis/kickster/storage/1.0.0/swagger.json",
      dom_id: '.swagger-container',
      deepLinking: true
    })
  }

}
