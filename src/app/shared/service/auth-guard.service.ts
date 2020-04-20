import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    /**
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     * @memberof AuthGuard
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('access_token')) {
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }

    /**
     *
     * @returns {(boolean | string)}
     * @memberof AuthGuard
     */
    getAuthorizationHeader(): boolean | string {
        if (localStorage.getItem('access_token')) {
            return localStorage.getItem('access_token');
        }

        return false;
    }
}
