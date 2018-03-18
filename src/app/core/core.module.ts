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
    ResourceIdPipe
} from './pipes';

import {
    JsonEditorComponent,
    SwaggerComponent,
    LoadingComponent,
    NavbarComponent,
    FooterComponent
} from './components';

import {
    UserService,
    ProductService,
    MetadataService,
    ArtifactService,
    UtilsService,
    ContentService,
    AccountService,
    ProductsResolve,
    UserResolve,
    AttributePipe,
    OptionPipe,
    SchemaService
} from './services';

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
    SwaggerComponent
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
          MetadataService,
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
