import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarModule } from 'ngx-scrollbar';
import { Title } from '@angular/platform-browser';

import {
    CapitalizePipe,
    DefaultPipe,
    ResourceIdPipe,
    DisplayOrderSortPipe,
} from './pipes';

import {
    JsonEditorComponent,
    SwaggerComponent,
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
    PreviewComponent,
    SliderComponent,
    MediaComponent,
    InfoComponent
} from './components';

import {
    UserService,
    ProductService,
    ArtifactService,
    UtilsService,
    ContentService,
    AccountService,
    UserResolve,
    AttributePipe,
    OptionPipe,
    SchemaService,
    MicroserviceService
} from './services';
import { PreviewCardComponent } from './components/preview/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ScrollbarModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ScrollbarModule,
    ReactiveFormsModule,
    JsonEditorComponent,
    SwaggerComponent,
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
    PreviewComponent,
    SliderComponent,
    MediaComponent,
    InfoComponent,
    CapitalizePipe,
    DefaultPipe,
    AttributePipe,
    OptionPipe,
    ResourceIdPipe,
    DisplayOrderSortPipe
  ],
  declarations: [
    CapitalizePipe,
    DefaultPipe,
    ResourceIdPipe,
    DisplayOrderSortPipe,
    OptionPipe,
    AttributePipe,
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
    JsonEditorComponent,
    SwaggerComponent,
    PreviewCardComponent,
    PreviewComponent,
    SliderComponent,
    MediaComponent,
    InfoComponent
  ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
          Title,
          UserResolve,
          UserService,
          ProductService,
          MicroserviceService,
          ArtifactService,
          AccountService,
          UtilsService,
          SchemaService,
          ContentService,
          AttributePipe,
          OptionPipe,
          ResourceIdPipe,
          DisplayOrderSortPipe
        ]
      };
    }
}
