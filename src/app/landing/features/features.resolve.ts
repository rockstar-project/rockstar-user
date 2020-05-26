import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MicroserviceFeature, MicroserviceService, UtilsService } from '../../core';

@Injectable()
export class FeaturesResolve implements Resolve<Array<MicroserviceFeature>> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<MicroserviceFeature>> {
    return this.microserviceService.getFeatures();
  }

}
