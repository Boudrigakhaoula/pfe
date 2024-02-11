import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoLoggedInGuard implements CanActivate {

  constructor(private route : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('AdminRestoToken');

    if (token){
      this.route.navigate(['/admin_resto/dashboard-resto']);
      return false;
    } else {
      return true;
    }

  }

}
