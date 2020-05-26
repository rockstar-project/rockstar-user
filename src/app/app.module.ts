import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app.routing';
import { SidebarModule } from 'ng-sidebar';

import { CoreModule } from './core';
import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        MarkdownModule.forRoot(),
        AppRoutingModule,
        ProductModule,
        SidebarModule.forRoot(),
        CoreModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
