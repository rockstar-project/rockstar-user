import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Tool, MicroserviceService, UtilsService } from '../../core';

@Injectable()
export class ToolsResolve implements Resolve<Array<Tool>> {

  constructor(private router: Router, private microserviceService: MicroserviceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Tool>> {
    return this.microserviceService.getTools();
  }

}
