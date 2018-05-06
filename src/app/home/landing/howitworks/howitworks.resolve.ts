import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Content } from '../content.model';
import { ContentService } from '../content.service';

@Injectable()
export class HowItWorksContentResolve implements Resolve<Content> {

  constructor(private router: Router, private contentService: ContentService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Content> {
    return this.contentService.getContent('howitworks');
  }

}
