import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Schema, MicroserviceService, UtilsService } from '../../../core';

@Injectable()
export class DomainDrivenFeatureResolve implements Resolve<Array<Schema>> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Schema>> {
    return this.microserviceService.getSchemas()
  }

}
