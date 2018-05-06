import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './../../core';

import { FeaturesRoutes as routes } from './features.routes';
import { FeaturesComponent } from './features.component';
import { FeaturesResolve } from './features.resolve';

import { MicroserviceFeatureComponent } from './microservice/microservice.component';
import { MicroserviceFeatureResolve } from './microservice/microservice.resolve';
import { MicroserviceFeatureItemComponent } from './microservice/item/item.component';

import { DomainDrivenFeatureComponent } from './domain/domain.component';
import { DomainDrivenFeatureResolve } from './domain/domain.resolve';

import { PolyglotFeatureItemComponent } from './polyglot/item/item.component';
import { PolyglotFeatureComponent } from './polyglot/polyglot.component';
import { PolyglotFeatureResolve } from './polyglot/polyglot.resolve';

import { CloudnativeFeatureComponent } from './cloudnative/cloudnative.component';
import { CloudnativeFeatureResolve } from './cloudnative/cloudnative.resolve';
import { CloudnativeCapabilityComponent } from './cloudnative/capabilities/capabilities.component';
import { CloudnativeCapabilitiesResolve } from './cloudnative/capabilities/capabilities.resolve';
import { CoreCapabilityComponent } from './cloudnative/core/core.component';
import { CoreCapabilityResolve } from './cloudnative/core/core.resolve';
import { SupportingCapabilityComponent } from './cloudnative/supporting/supporting.component';
import { SupportingCapabilityResolve } from './cloudnative/supporting/supporting.resolve';
import { InfrastructureCapabilityComponent } from './cloudnative/infrastructure/infrastructure.component';
import { InfrastructureCapabilityResolve } from './cloudnative/infrastructure/infrastructure.resolve';
import { ProcessGovernCapabilityComponent } from './cloudnative/processgovern/processgovern.component';
import { ProcessGovernCapabilityResolve } from './cloudnative/processgovern/processgovern.resolve';

@NgModule({
    declarations: [
        FeaturesComponent,
        MicroserviceFeatureComponent,
        MicroserviceFeatureItemComponent,
        DomainDrivenFeatureComponent,
        PolyglotFeatureComponent,
        PolyglotFeatureItemComponent,
        CloudnativeFeatureComponent,
        CloudnativeCapabilityComponent,
        CoreCapabilityComponent,
        SupportingCapabilityComponent,
        InfrastructureCapabilityComponent,
        ProcessGovernCapabilityComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        CoreModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        FeaturesResolve,
        DomainDrivenFeatureResolve,
        CloudnativeFeatureResolve,
        PolyglotFeatureResolve,
        MicroserviceFeatureResolve,
        CoreCapabilityResolve,
        SupportingCapabilityResolve,
        CloudnativeCapabilitiesResolve,
        InfrastructureCapabilityResolve,
        ProcessGovernCapabilityResolve

    ]
})
export class FeaturesModule { }