import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  readonly ROOT_URL = environment.BACKEND_URL;

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`${this.ROOT_URL}/api/v1/users`, { user })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    if (error.status === 422) {
      return throwError('No es posible procesar el formulario');
    }
    return throwError('¡Sucedio un error inesperado!');
  }
}
