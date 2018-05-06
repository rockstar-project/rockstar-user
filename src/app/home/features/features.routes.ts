import { Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { FeaturesResolve } from './features.resolve';
import { MicroserviceFeatureComponent } from './microservice/microservice.component';
import { MicroserviceFeatureResolve } from './microservice/microservice.resolve';
import { DomainDrivenFeatureComponent } from './domain/domain.component';
import { DomainDrivenFeatureResolve } from './domain/domain.resolve';
import { CloudnativeFeatureComponent } from './cloudnative/cloudnative.component';
import { CloudnativeFeatureResolve } from './cloudnative/cloudnative.resolve';
import { PolyglotFeatureComponent } from './polyglot/polyglot.component';
import { PolyglotFeatureResolve } from './polyglot/polyglot.resolve';
import { CoreCapabilityComponent } from './cloudnative/core/core.component';
import { CoreCapabilityResolve } from './cloudnative/core/core.resolve'
import { SupportingCapabilityComponent } from './cloudnative/supporting/supporting.component';
import { SupportingCapabilityResolve } from './cloudnative/supporting/supporting.resolve';
import { CloudnativeCapabilityComponent } from './cloudnative/capabilities/capabilities.component';
import { CloudnativeCapabilitiesResolve } from './cloudnative/capabilities/capabilities.resolve';
import { InfrastructureCapabilityComponent } from './cloudnative/infrastructure/infrastructure.component';
import { InfrastructureCapabilityResolve } from './cloudnative/infrastructure/infrastructure.resolve';
import { ProcessGovernCapabilityComponent } from './cloudnative/processgovern/processgovern.component';
import { ProcessGovernCapabilityResolve } from './cloudnative/processgovern/processgovern.resolve';

export const FeaturesRoutes: Routes = [
    { 
        path: '',
        component: FeaturesComponent,
        resolve: {
            features: FeaturesResolve
        }
    },
    {
        path: 'microservice',
        component: MicroserviceFeatureComponent,
        resolve: {
            architectures: MicroserviceFeatureResolve      
        }
    },
    {
        path: 'domain',
        component: DomainDrivenFeatureComponent,
        resolve: {
            schemas: DomainDrivenFeatureResolve      
        }
    },
    {
        path: 'polyglot',
        component: PolyglotFeatureComponent,
        resolve: {
            runtimes: PolyglotFeatureResolve
        }
    },
    {
        path: 'cloudnative',
        component: CloudnativeFeatureComponent,
        resolve: {
            capabilities: CloudnativeFeatureResolve
        }
    },
    {
        path: 'capabilities',
        component: CloudnativeCapabilityComponent,
        resolve: {
            capabilities: CloudnativeCapabilitiesResolve
        }, 
        children: [
            {
                path: '',
                redirectTo: 'core',
                pathMatch: 'full'
            },
            {
                path: 'core',
                component: CoreCapabilityComponent,
                resolve: {
                    core: CoreCapabilityResolve
                }
            },
            {
                path: 'supporting',
                component: SupportingCapabilityComponent,
                resolve: {
                    supporting: SupportingCapabilityResolve
                }
            },
            {
                path: 'process_governance',
                component: ProcessGovernCapabilityComponent,
                resolve: {
                    processgovern: ProcessGovernCapabilityResolve
                }
            },
            {
                path: 'infrastructure',
                component: InfrastructureCapabilityComponent,
                resolve: {
                    infrastructure: InfrastructureCapabilityResolve
                }
            }
        ]
    }
];