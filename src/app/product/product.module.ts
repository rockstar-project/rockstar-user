import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { SidebarModule } from 'ng-sidebar';

import { HighlightModule } from 'ngx-highlightjs'; 
import { CoreModule } from './../core';
import { OptionCardComponent } from './options/card/card.component';
import { ProductRoutes as routes } from './product.routes';
import { ProductComponent } from './product.component';
import { OptionsComponent } from './options/options.component';
import { OptionAccordionComponent } from './options/accordion/accordion.component';
import { OptionTabsComponent } from './options/tabs/tabs.component';
import { OptionGridComponent } from './options/grid/grid.component';
import { SpecificationComponent } from './spec/spec.component';
import { OverviewComponent } from './overview/overview.component';
import { CodeComponent } from './code/code.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductResolve } from '../core/services/product/product.resolve';
import { OptionsResolve } from './options/options.resolve';

@NgModule({
    declarations: [
        ProductComponent,
        SpecificationComponent,
        OptionsComponent,
        OptionAccordionComponent,
        OptionTabsComponent,
        OptionGridComponent,
        OptionCardComponent,
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
        SidebarModule,
        HighlightModule.forRoot({ theme: 'tomorrow'}),
        RouterModule.forChild(routes)
    ],
    providers: [
        ProductResolve,
        OptionsResolve
    ]
})
export class ProductModule { }
