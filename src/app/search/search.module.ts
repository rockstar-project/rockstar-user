import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { CoreModule } from './../core';
import { SearchRoutes as routes } from './search.routes';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './card/card.component';
import { OptionFilterComponent } from './filters/option/option.component';
import { SearchProductsResolve } from './search.resolve';

@NgModule({
    declarations: [
        OptionFilterComponent,
        SearchItemComponent,
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CoreModule,
        SidebarModule,
        AngularMultiSelectModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        SearchProductsResolve
    ]
})
export class SearchModule { }
