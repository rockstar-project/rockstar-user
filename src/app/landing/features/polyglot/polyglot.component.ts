import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Runtime, MicroserviceService, UtilsService, Framework, fuseAnimations, Preview } from '../../../core';
import { trigger, transition, query, stagger, animate, style, state, group, animateChild} from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-feature-polyglot',
    templateUrl: './polyglot.component.html',
    styleUrls: ['./polyglot.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                group([
                    query('.card', [
                        style({ opacity: 0, transform: 'translateX(-50px)' }),
                        stagger(100, [
                            animate('0.5s ease-out', style({ opacity: 1, transform: 'none' }))
                        ])
                    ])
                ])
            ])
        ])
    ]
})

export class PolyglotFeatureComponent implements OnInit, OnDestroy {
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
        private utilsService: UtilsService,
        private location: Location) {
    }

    ngOnInit() {
        let runtime:Runtime = null;
        this.runtimes = new Array<Runtime>();
    
        this.sub = this.route.params.subscribe(params => {
            let result = this.utilsService.sortDisplayOrder(this.route.snapshot.data['runtimes']);
            for (let current of result) {
                runtime = new Runtime();
                runtime.slug = current.slug;
                runtime.title = current.title;
                runtime.description = current.description;
                runtime.enabled = current.enabled;
                runtime.thumbnail = current.thumbnail;
                runtime.frameworks = this.utilsService.sortDisplayOrder(current.frameworks);
                this.runtimes.push(runtime);
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
                if (this.backendSelected) {
                    if (this.backendSelected.slug === runtime.slug) {
                        this.backendCollapse = 'closed';
                        this.backendSelected = null;
                    } else {
                        this.backendSelected = runtime;
                    }
                }
            } else if (this.backendCollapse === 'closed') {
                this.backendCollapse = 'open';
                this.backendSelected = runtime;
            }
        }
    }
    onToggleFrontendLanguage(runtime: Runtime) {
        if (runtime) {
            
            if (this.frontendCollapse === 'open') {
                if (this.frontendSelected) {
                    if (this.frontendSelected.slug === runtime.slug) {
                        console.log("closing " + this.frontendSelected.slug);
                        this.frontendCollapse = 'closed';
                        this.frontendSelected = null;
                    } else {
                        this.frontendSelected = runtime;
                    }
                }
            } else if (this.frontendCollapse === 'closed') {
                this.frontendCollapse = 'open';
                this.frontendSelected = runtime;
                console.log("opening " + this.frontendSelected.slug);
            }
        }
    }

    goback() {
        this.location.back();
    }

}