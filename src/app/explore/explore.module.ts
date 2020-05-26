import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CoreModule } from "./../core";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExploreRoutingModule } from './explore.routes';
import { ExploreComponent } from './explore.component';
import { ExploreCardComponent } from './card/card.component';
import { ExploreProductsResolve } from './explore.resolve';
import { InterceptorService } from 'app/auth/interceptor.service';

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
        ExploreRoutingModule
    ],
    providers: [
        ExploreProductsResolve,
    ]
})
export class ExploreModule { }