import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.services';
import { CredencialesLogin } from 'src/app/Interfaces/credenciales-login.model';



@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent  {
  cUser_name: string = '';
  cPassword: string = '';
  errorMessage: string = '';


  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    console.log()
    this.authService.login(this.cUser_name, this.cPassword).subscribe(
      
      (response: any) => {
      
      
        console.log();
          localStorage.setItem('token', response.token);
        this.router.navigate(['/pages']);
      },
      (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Credenciales incorrectas. Inténtelo de nuevo.';
        } else {
          this.errorMessage = 'Error al iniciar sesión. Por favor, inténtelo más tarde.';
          console.error('Error al iniciar sesión:', error);
        }
      }
    );
  }
}

