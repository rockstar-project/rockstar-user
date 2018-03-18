import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { HighlightModule } from 'ngx-highlightjs'; 
import { CoreModule } from './../core';
import { OptionCardComponent } from './design/options/card/card.component';
import { ProductRoutes as routes } from './product.routes';
import { ProductComponent } from './product.component';
import { DesignComponent } from './design/design.component';
import { OptionsComponent } from './design/options/options.component';
import { SpecificationComponent } from './design/spec/spec.component';
import { DevelopComponent } from './develop/develop.component';
import { OverviewComponent } from './develop/overview/overview.component';
import { CodeComponent } from './develop/code/code.component';
import { GalleryComponent } from './develop/gallery/gallery.component';
import { ProductResolve } from '../core/services/product/product.resolve';
@NgModule({
    declarations: [
        ProductComponent,
        DesignComponent,
        SpecificationComponent,
        OptionsComponent,
        OptionCardComponent,
        DevelopComponent,
        OverviewComponent,
        CodeComponent,
        GalleryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        MarkdownModule.forChild(),
        CoreModule,
        NgxGalleryModule,
        HighlightModule.forRoot({ theme: 'tomorrow'}),
        RouterModule.forChild(routes)
    ],
    providers: [
        ProductResolve
    ]
})
export class ProductModule { }
