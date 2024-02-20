import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';


const checkAuthStatus = (): boolean | Observable<boolean> => {
    const router = inject(Router)
    const authService = inject(AuthService)

    return authService.checkAuthentication()
        .pipe(
            tap( isAuthenticated => {
                if(!isAuthenticated ) router.navigate(['./'])
            } )
        )
}

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  return checkAuthStatus();
};

export const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {

  return checkAuthStatus();
};

export const AuthGuard = {
  canActivate,
  canMatch,
};
