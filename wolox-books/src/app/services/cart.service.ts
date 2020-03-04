import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class CartService {

  private booksSource: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  selectedBooks = this.booksSource.asObservable();
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
    this.booksSource.next(this.books);
  }
}
