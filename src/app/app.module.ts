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
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductsResolver } from './shared/product/resolvers';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { HowItWorksComponent } from './home/howitworks/howitworks.component';
import { FeaturesComponent } from './home/features/features.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { BlogsComponent } from './home/blogs/blogs.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './profile/aboutme/aboutme.component';
import { ConnectionsComponent } from './profile/connections/connections.component';
import { AccountComponent } from './account/account.component';
import { PaymentInfoComponent } from './account/payment/info/info.component';
import { PaymentFormComponent } from './account/payment/form/form.component';
import { BillingInfoComponent } from './account/billing/info/info.component';
import { SubscriptionInfoComponent } from './account/subscription/info/info.component';
import { CollectionsComponent } from './collections/collections.component';
import { SearchComponent } from './search/search.component';
import { ExploreComponent } from './explore/explore.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductCardComponent } from './shared/product-card/card.component';
import { OptionCardComponent } from './shared/option-card/option-card.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ProductDetailsComponent } from './product/details.component';
import { CodeComponent } from './product/code/code.component';
import { DesignComponent } from './product/design/design.component';
import { OverviewComponent } from './product/overview/overview.component';
import { LegalComponent } from './home/legal/legal.component';
import { TermsOfUseComponent } from './home/legal/termsofuse/termsofuse.component';
import { PrivacyPolicyComponent } from './home/legal/privacypolicy/privacypolicy.component';

import {
    AuthGuard,
    ProductService,
    MetadataService,
    AuthService,
    ContentService,
    ArtifactService,
    AccountService
} from './shared';

@NgModule({
    declarations: [
        ExploreComponent,
        AppComponent,
        CallbackComponent,
        ProfileComponent,
        PaymentInfoComponent,
        AccountComponent,
        BillingInfoComponent,
        SubscriptionInfoComponent,
        PaymentFormComponent,
        AboutMeComponent,
        ConnectionsComponent,
        CollectionsComponent,
        SearchComponent,
        HomeComponent,
        HeroComponent,
        HowItWorksComponent,
        FeaturesComponent,
        PricingComponent,
        BlogsComponent,
        LegalComponent,
        PrivacyPolicyComponent,
        TermsOfUseComponent,
        NavbarComponent,
        FooterComponent,
        ProductCardComponent,
        ProductDetailsComponent,
        OptionCardComponent,
        DesignComponent,
        OverviewComponent,
        CodeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        HttpModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
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
        ArtifactService,
        ContentService,
        ProductsResolver,
        MetadataService,
        AccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
