import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LegalRoutes as routes } from './legal.routes';
import { LegalComponent } from './legal.component';
import { LegalService } from './legal.service';

@NgModule({
    declarations: [
        LegalComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        LegalService
    ]
})
export class LegalModule { }
