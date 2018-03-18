import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './../core';
import { SearchRoutes as routes } from './search.routes';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CoreModule,
        AngularMultiSelectModule,
        RouterModule.forChild(routes)
    ]
})
export class SearchModule { }
