import { Observable, pipe, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MicroserviceService, UtilsService, Capability } from '../../core';

@Injectable()
export class OptionsResolve implements Resolve<any> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let capabilities = this.microserviceService.getCapabilities(null)
    let core = this.microserviceService.getCapability('core');
    let supporting = this.microserviceService.getCapability('supporting');
    let infrastructure = this.microserviceService.getCapability('infrastructure');
    let processgovern = this.microserviceService.getCapability('process_governance');
    return forkJoin([capabilities, core, supporting, infrastructure, processgovern]);
  }

}
