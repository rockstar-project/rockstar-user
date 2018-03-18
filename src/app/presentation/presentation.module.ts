import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { PresentationRoutes as routes } from './presentation.routes';
import { PresentationComponent } from './presentation.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ PresentationComponent ],
    exports:[ PresentationComponent ],
    providers: []
})
export class PresentationModule { }