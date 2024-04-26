
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.services';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> | UrlTree {
    const userRole = this.authService.getUserRole();

    if (typeof userRole === 'number') {
      if (this.authService.isAuthenticated()) {
        if (next.data && next.data['requiredRole']) {
          const requiredRole = next.data['requiredRole'];

          console.log('Rol Requerido:', requiredRole);
          console.log('Usuario Rol:', userRole);

          if (this.authService.hasPermission(userRole, requiredRole)) {
            console.log('Acceso permitido!');
            return true;
          }
        }

        console.log('Que haces aqui?!');
        return this.router.parseUrl('/login');
      } else {
        console.log('No estas autentificado bro!');
        return this.router.parseUrl('/login');
      }
    } else {
      console.error('Rol de usuario Invalido:', userRole);
      return false;
    }
  }
}
