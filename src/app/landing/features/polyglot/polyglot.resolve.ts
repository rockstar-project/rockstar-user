import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MicroserviceService, UtilsService, Runtime } from '../../../core';

@Injectable()
export class PolyglotFeatureResolve implements Resolve<Array<Runtime>> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Runtime>> {
    return this.microserviceService.getRuntimes()
  }

}
