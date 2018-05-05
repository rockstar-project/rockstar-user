import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Architecture, MicroserviceService, UtilsService } from '../../../core';

@Injectable()
export class MicroserviceFeatureResolve implements Resolve<Array<Architecture>> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Architecture>> {
    return this.microserviceService.getArchitectures();
  }

}
