import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductsResolver } from './shared';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PageNotFoundComponent } from './shared/error/notfound/notfound.component';

import {
    AuthGuard,
    ProductService,
    MetadataService,
    AuthService,
    ContentService,
    ArtifactService,
    AccountService
} from './shared';

import { HomeModule } from './home/home.module';
import { AccountHomeModule } from './account/account.module';
import { CollectionsModule } from './collections/collections.module';
import { ExploreModule } from './explore/explore.module';
import { SearchModule } from './search/search.module';
import { ProfileModule } from './profile/profile.module';
import { ProductHomeModule } from './product/product.module';

@NgModule({
    declarations: [
        AppComponent,
        CallbackComponent,
        NavbarComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        HttpModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        TagInputModule,
        AngularMultiSelectModule,
        NgxGalleryModule,
        NouisliderModule,
        HomeModule,
        ExploreModule,
        AccountHomeModule,
        CollectionsModule,
        SearchModule,
        ProfileModule,
        ProductHomeModule
    ],
    providers: [
        AuthGuard,
        ProductService,
        AuthService,
        ArtifactService,
        ContentService,
        ProductsResolver,
        MetadataService,
        AccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
