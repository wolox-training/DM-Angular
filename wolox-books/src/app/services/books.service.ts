import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Book } from '../models/book.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.BACKEND_URL}/api/v1/books`);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.BACKEND_URL}/api/v1/books/${id}`)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(`No se encontro ningún Libro con el ID ${id}`);
      }));
  }
}
