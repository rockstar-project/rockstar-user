import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MicroserviceService, UtilsService, CapabilityItem, Capability } from '../../../core';

@Injectable()
export class CapabilityItemsFeatureResolve implements Resolve<Array<Capability>> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Capability>> {
    let capabilitySlug = route.paramMap.get('slug');
    return this.microserviceService.getCapabilityItems(capabilitySlug);
  }

}