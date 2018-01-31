import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';
import { AppRoutingModule } from './app.routing';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { Parallax, ParallaxConfig } from 'ng2-parallax/commonjs';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductsResolver } from './shared/product/resolvers';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ConnectionsComponent } from './profile/connections/connections.component';
import { CollectionsComponent } from './profile/collections/collections.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/product-card/card.component';
import { ProductPageComponent } from './product/page.component';
import { OptionCardComponent } from './shared/option-card/option-card.component';
import { DesignComponent } from './design/design.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodeComponent } from './code/code.component';
import { ExploreComponent } from './explore/explore.component';

import {
    AuthGuard,
    ProductService,
    MetadataService,
    AuthService,
    ContentService,
    GeneratorService
} from './shared';

@NgModule({
    declarations: [
        ExploreComponent,
        AppComponent,
        CallbackComponent,
        ProfileComponent,
        ConnectionsComponent,
        CollectionsComponent,
        SearchComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        ProductCardComponent,
        ProductPageComponent,
        OptionCardComponent,
        DesignComponent,
        CodeComponent,
        Parallax
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        HttpModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        TreeModule,
        AppRoutingModule,
        JWBootstrapSwitchModule,
        TagInputModule,
        AngularMultiSelectModule,
        NgxGalleryModule,
        NouisliderModule,
        AceEditorModule
    ],
    providers: [
        AuthGuard,
        ProductService,
        AuthService,
        GeneratorService,
        ContentService,
        ProductsResolver,
        MetadataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
