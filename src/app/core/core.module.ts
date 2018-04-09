import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollbarModule } from 'ngx-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';

import {
    CapitalizePipe,
    DefaultPipe,
    ResourceIdPipe
} from './pipes';

import {
    JsonEditorComponent,
    SwaggerComponent,
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
    PreviewComponent
} from './components';

import {
    UserService,
    ProductService,
    ArtifactService,
    UtilsService,
    ContentService,
    AccountService,
    ProductsResolve,
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
    ReactiveFormsModule,
    FlexLayoutModule
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
    CapitalizePipe,
    DefaultPipe,
    AttributePipe,
    OptionPipe,
    ResourceIdPipe
  ],
  declarations: [
    CapitalizePipe,
    DefaultPipe,
    ResourceIdPipe,
    OptionPipe,
    AttributePipe,
    LoadingComponent,
    NavbarComponent,
    FooterComponent,
    JsonEditorComponent,
    SwaggerComponent,
    PreviewCardComponent,
    PreviewComponent
  ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: CoreModule,
        providers: [
          Title,
          UserResolve,
          ProductsResolve,
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
          ResourceIdPipe
        ]
      };
    }
}
