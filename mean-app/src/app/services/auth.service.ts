import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  registerWithEmailAndPassword(email: string, password: string) {
    this.http
      .post(`${environment.baseUrl}/auth/register`, { email, password })
      .subscribe(
        (response) => {
          this.router.navigate(['todos']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  loginUser(email: string, password: string) {
    this.http
      .post(`${environment.baseUrl}/auth/login`, { email, password })
      .subscribe(
        (response) => {
          this.router.navigate(['todos']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
