import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from './user.model';
import { UserService } from './user.service';

@Injectable()
export class UserResolve implements Resolve<UserProfile> {

  constructor(private router: Router, private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfile> {
    let userid = route.paramMap.get('userid');
    return null; // this.userService.getUser(userid);
  }

}