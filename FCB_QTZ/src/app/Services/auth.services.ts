
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { tap } from 'rxjs/operators';
 import { Router } from '@angular/router';

 import { CredencialesLogin } from '../Interfaces/credenciales-login.model';
 import { IPagina } from '../Interfaces/i-pagina';

 @Injectable({
   providedIn: 'root',
 })
 export class AuthService {

   private apiUrl = 'https://localhost:7059/api/Usuario';

   userRole: number = 0;
   constructor(private http: HttpClient, private router: Router) {}

   public login(cUser_name: string, cPassword: string): Observable<any> {
    const credenciales = {
       cUser_name: cUser_name,
     cPassword: cPassword,
     };

     return this.http.post(`${this.apiUrl}/Autenticar`, credenciales).pipe(
       tap((response: any) => {
        const token = response.token;
         const role = response.rol;

         localStorage.setItem('token', token);
         localStorage.setItem('role', role.toString());
         this.userRole = role;
       })
     );
   }

  

   public isAuthenticated(): boolean {
     const token = localStorage.getItem('token');
     return !!token;
   }

   public hasPermission(userRole: number, requiredRole: number): boolean {
     return userRole !== undefined && userRole === requiredRole;
   }

   public logout(): void {
     localStorage.removeItem('token');
     localStorage.removeItem('role');
     this.userRole = 0;
     this.router.navigate(['/login']);
   }
   public getUserRole(): number {
     return this.userRole;
   }

   static LeerListaPaginas(userRole: number): IPagina[] {
     if (userRole === 1) {
       return [
         { iCvePagina: 0, nombre: 'Cliente'},
         { iCvePagina: 1, nombre: 'Administrador' },
         { iCvePagina:2, nombre: 'Cliente'},
         { iCvePagina:3, nombre: 'Cliente'},
         { iCvePagina:4, nombre: 'Cliente'},
         { iCvePagina:5, nombre: 'administrador'}
       ];
     } else if (userRole === 2) {
       return [
        { iCvePagina: 2, nombre: 'Cliente' },
      ];
    } else if (userRole === 3) {
      return [
        { iCvePagina: 3, nombre: 'Administrador' },
      ];
     } else if (userRole === 4) {
      return [
         { iCvePagina: 4, nombre: 'Visiatnte' },
       ];
     } else {
      return [];
     }
   }
 }

