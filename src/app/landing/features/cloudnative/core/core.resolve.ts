import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Capability, MicroserviceService, UtilsService } from '../../../../core';

@Injectable()
export class CoreCapabilityResolve implements Resolve<Capability> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Capability> {
    return this.microserviceService.getCapability('core');
  }

}