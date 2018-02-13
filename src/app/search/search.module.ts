import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchRoutes as routes } from './search.routes';
import { SearchComponent } from './search.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        SearchComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        AngularMultiSelectModule,
        RouterModule.forChild(routes)
    ]
})
export class SearchModule { }
