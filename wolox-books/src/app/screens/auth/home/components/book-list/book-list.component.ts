import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as BookActions from '../../../../../books.actions';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  $books: Observable<Book[]>;
  filterField: string;

  constructor(private bookService: BooksService, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.$books = this.bookService.getBooks();
  }

  searchById(bookId: number) {
    this.router.navigate(['books', bookId]);
  }

  addBookToCart(book: Book) {
    this.store.dispatch(new BookActions.AddBook(book));
  }
}
