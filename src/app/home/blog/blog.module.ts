import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BlogRoutes as routes } from './blog.routes';
import { BlogComponent } from './blog.component';

@NgModule({
    declarations: [
        BlogComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes)
    ]
})
export class BlogModule { }