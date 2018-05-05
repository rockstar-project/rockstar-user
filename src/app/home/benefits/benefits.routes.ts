import { Routes } from '@angular/router';
import { AgilityBenefitComponent } from './agility/agility.component';
import { ProductivityBenefitComponent } from './productivity/productivity.component';
import { FlexibilityBenefitComponent } from './flexibility/flexibility.component';
import { BenefitsComponent } from './benefits.component';

export const BenefitsRoutes: Routes = [
    {
        path: '',
        component: BenefitsComponent,
        children: [
            {
                path: '',
                redirectTo: 'productivity',
                pathMatch: 'full'
            },
            { 
                path: 'productivity',
                component: ProductivityBenefitComponent,
                data: {
                    animation: {
                      value: 'productivity'
                    }
                }
            },
            { 
                path: 'flexibility',
                component: FlexibilityBenefitComponent,
                data: {
                    animation: {
                      value: 'flexibility'
                    }
                }
            },
            { 
                path: 'agility',
                component: AgilityBenefitComponent,
                data: {
                    animation: {
                      value: 'agility'
                    }
                }
            }
        ]
    }
];