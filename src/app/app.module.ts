import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app.routing';

import { CoreModule } from './core';
import { AuthModule } from './auth';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
    declarations: [
        AppComponent,
        CallbackComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        MarkdownModule.forRoot(),
        AppRoutingModule,
        HomeModule,
        ProductModule,
        AuthModule.forRoot(),
        CoreModule.forRoot()
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
