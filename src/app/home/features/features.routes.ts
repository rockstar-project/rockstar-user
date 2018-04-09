import { Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { ArchitectureFeatureComponent } from './architecture/architecture.component';
import { SchemaFeatureComponent } from './schema/schema.component';
import { RuntimeFeatureComponent } from './runtime/runtime.component';
import { CapabilityItemsFeatureComponent } from './capabilityitems/capabilityitems.component';
import { CapabilitiesFeatureComponent } from './capabilities/capabilities.component';
import { SchemaFeatureResolve } from './schema/schema.resolve';
import { ArchitectureFeatureResolve } from './architecture/architecture.resolve';
import { RuntimeFeatureResolve } from './runtime/runtime.resolve';
import { CapabilityItemsFeatureResolve } from './capabilityitems/capabilityitems.resolve';
import { CapabilityFeatureResolve } from './capabilities/capabilities.resolve';
import { ToolsFeatureComponent } from './tools/tools.component';
import { ToolsFeatureResolve } from './tools/tools.resolve';

export const FeaturesRoutes: Routes = [
    { 
        path: '',
        component: FeaturesComponent,
    },
    {
        path: 'architecture',
        component: ArchitectureFeatureComponent,
        resolve: {
            architectures: ArchitectureFeatureResolve      
        }
    },
    {
        path: 'apifirst',
        component: SchemaFeatureComponent,
        resolve: {
            schemas: SchemaFeatureResolve      
        }
    },
    {
        path: 'language',
        component: RuntimeFeatureComponent,
        resolve: {
            runtimes: RuntimeFeatureResolve
        }
    },
    {
        path: 'cloudnative',
        component: CapabilitiesFeatureComponent,
        resolve: {
            capabilities: CapabilityFeatureResolve
        },
        children: [
            {
                path: '',
                redirectTo: 'core',
                pathMatch: 'full'
            },
            {
                path: ':slug',
                component: CapabilityItemsFeatureComponent,
                resolve: {
                    capabilityitems: CapabilityItemsFeatureResolve
                }
            }
        ]
    },
    {
        path: 'tools',
        component: ToolsFeatureComponent,
        resolve: {
            tools: ToolsFeatureResolve
        }
    }
];