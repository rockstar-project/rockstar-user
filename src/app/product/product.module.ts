import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AceEditorModule } from 'ng2-ace-editor';
import { OptionCardComponent } from './option-card/option-card.component';
import { ProductRoutes as routes } from './product.routes';
import { ProductDetailsComponent } from './details.component';
import { OverviewComponent } from './overview/overview.component';
import { DesignComponent } from './design/design.component';
import { CodeComponent } from './code/code.component';

@NgModule({
    declarations: [
        ProductDetailsComponent,
        OverviewComponent,
        DesignComponent,
        CodeComponent,
        OptionCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        AceEditorModule,
        RouterModule.forChild(routes)
    ]
})
export class ProductHomeModule { }
