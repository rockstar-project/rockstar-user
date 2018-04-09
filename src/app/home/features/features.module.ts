import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './../../core';

import { FeaturesRoutes as routes } from './features.routes';
import { FeaturesComponent } from './features.component';
import { ArchitectureFeatureComponent } from './architecture/architecture.component';
import { SchemaFeatureComponent } from './schema/schema.component';
import { RuntimeFeatureComponent } from './runtime/runtime.component';
import { ToolsFeatureComponent } from './tools/tools.component';
import { CapabilityItemsFeatureComponent } from './capabilityitems/capabilityitems.component';
import { CapabilitiesFeatureComponent } from './capabilities/capabilities.component';
import { SchemaFeatureResolve } from './schema/schema.resolve';
import { CapabilityFeatureResolve } from './capabilities/capabilities.resolve';
import { ArchitectureFeatureResolve } from './architecture/architecture.resolve';
import { ArchitectureFeatureItemComponent } from './architecture/item/item.component';
import { RuntimeLanguageFeatureComponent } from './runtime/language/language.component';
import { RuntimeFeatureResolve } from './runtime/runtime.resolve';
import { CapabilityItemsFeatureResolve } from './capabilityitems/capabilityitems.resolve';
import { ToolsFeatureResolve } from './tools/tools.resolve';

@NgModule({
    declarations: [
        FeaturesComponent,
        ArchitectureFeatureComponent,
        ArchitectureFeatureItemComponent,
        RuntimeLanguageFeatureComponent,
        SchemaFeatureComponent,
        RuntimeFeatureComponent,
        CapabilityItemsFeatureComponent,
        CapabilitiesFeatureComponent,
        ToolsFeatureComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        CoreModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        SchemaFeatureResolve,
        CapabilityFeatureResolve,
        CapabilityItemsFeatureResolve,
        CapabilityFeatureResolve,
        RuntimeFeatureResolve,
        ArchitectureFeatureResolve,
        ToolsFeatureResolve
    ]
})
export class FeaturesModule { }