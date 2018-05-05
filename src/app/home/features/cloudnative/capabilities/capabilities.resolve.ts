import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MicroserviceService, UtilsService, Capability } from '../../../../core';

@Injectable()
export class CloudnativeCapabilitiesResolve implements Resolve<Capability[]> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Capability[]> {
    return this.microserviceService.getCapabilities(null)
  }

}
