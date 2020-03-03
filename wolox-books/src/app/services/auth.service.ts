import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly ROOT_URL = environment.BACKEND_URL;

  constructor(
    private http: HttpClient
  ) { }

  login(session): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/api/v1/users/sessions`, { session })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError('Usuario o contraseña no válidos');
        }),
        tap((response: any) => {
          localStorage.setItem('access_token', response.access_token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  getToken(): string {
    return localStorage.getItem('access_token');
  }
}
