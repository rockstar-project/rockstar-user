import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Runtime, MicroserviceService, UtilsService, Framework, fuseAnimations, Preview } from '../../../core';
import { trigger, transition, query, stagger, animate, style, state } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-feature-runtime',
    templateUrl: './runtime.component.html',
    styleUrls: ['./runtime.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.frontend, .backend', [
                    style({ opacity: 0, transform: 'translateY(-50px)' }),
                    stagger(100, [
                        animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ]),
        trigger('openClose', [
              state('closed, void', style({height: '0px'})),
              state('open', style({height: '*'})),
              transition(
                  'closed <=> open', [animate(500, style({height: '225px'})), animate(200)])
        ])
    ]
})

export class RuntimeFeatureComponent implements OnInit, OnDestroy {
    sub: any;

    frontendCollapse:string = "closed";
    frontendSelected: Runtime;

    backendCollapse:string = "closed";
    backendSelected: Runtime;
    runtimes: Array<Runtime>
    frameworks: Array<Framework>;
    frontend_runtimes: Array<Runtime>
    backend_runtimes: Array<Runtime>

    @HostBinding('@pageAnimations')
    public animatePage = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private utilsService: UtilsService) {
    }

    ngOnInit() {
        this.frontend_runtimes = new Array<Runtime>();
        this.backend_runtimes = new Array<Runtime>();
        this.sub = this.route.params.subscribe(params => {
            this.runtimes = this.utilsService.sortDisplayOrder(this.route.snapshot.data['runtimes']);
            for (let current of this.runtimes) {
                if (current.stack === 'frontend') {
                    this.frontend_runtimes.push(current);
                } else if (current.stack === 'backend') {
                    this.backend_runtimes.push(current);
                }
            }
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    onToggleBackendLanguage(runtime: Runtime) {
        if (runtime) {
            if (this.backendCollapse === 'open') {
                this.backendCollapse = 'closed';
                this.backendSelected = null;
            } else if (this.backendCollapse === 'closed') {
                this.backendCollapse = 'open';
                this.backendSelected = runtime;
            }
        }
    }

    onToggleFrontendLanguage(runtime: Runtime) {
        if (runtime) {
            if (this.frontendCollapse === 'open') {
                this.frontendCollapse = 'closed';
                this.frontendSelected = null;
            } else if (this.frontendCollapse === 'closed') {
                this.frontendCollapse = 'open';
                this.frontendSelected = runtime;
            }
        }
    }

}