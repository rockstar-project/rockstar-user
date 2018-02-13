import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExploreRoutes as routes } from './explore.routes';
import { ExploreComponent } from './explore.component';
import { CardGridComponent } from './card-grid/card-grid.component';

@NgModule({
    declarations: [
        ExploreComponent,
        CardGridComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ]
})
export class ExploreModule { }
