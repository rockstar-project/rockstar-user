import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionRoutingModule } from './collections.routes';
import { CollectionsComponent } from './collections.component';

@NgModule({
    declarations: [
        CollectionsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        CollectionRoutingModule,
    ]
})
export class CollectionsModule { }
