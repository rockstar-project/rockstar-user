import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CoreModule } from "./../core";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExploreRoutes as routes } from './explore.routes';
import { ExploreComponent } from './explore.component';
import { ExploreCardComponent } from './card/card.component';
import { ExploreProductsResolve } from './explore.resolve';

@NgModule({
    declarations: [
        ExploreComponent,
        ExploreCardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CoreModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        ExploreProductsResolve
    ]
})
export class ExploreModule { }
