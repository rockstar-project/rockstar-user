import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MicroserviceService, UtilsService, Capability } from '../../../core';

@Injectable()
export class CloudnativeFeatureResolve implements Resolve<Capability[]> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Capability[]> {
    /*
    let subcapabilities = new Array<Capability>();
    let capabilities = this.microserviceService.getCapabilities(null)
    let core = this.microserviceService.getCapability('core');
    let supporting = this.microserviceService.getCapability('supporting');
    let infrastructure = this.microserviceService.getCapability('infrastructure');
    let processgovern = this.microserviceService.getCapability('process_governance');
    return Observable.forkJoin([capabilities, core, supporting, infrastructure, processgovern]);
    */
   let feature = this.microserviceService.getFeature('cloudnative')
   let capabilities = this.microserviceService.getCapabilities(null)
    return this.microserviceService.getCapabilities(null);
  }

}
