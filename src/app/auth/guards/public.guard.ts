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
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (isAuthenticated) router.navigate(['./auth/login']);
    }),
    map( isAuthenticated => !isAuthenticated)
  );
};

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

export const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return checkAuthStatus();
};

export const PublicGuard = {
    canMatch,
    canActivate
}