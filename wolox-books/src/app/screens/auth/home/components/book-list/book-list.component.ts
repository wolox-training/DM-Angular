import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  $books: Observable<Book[]>;
  filterField: string;

  constructor(private bookService: BooksService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.$books = this.bookService.getBooks();
  }

  searchById(bookId: number) {
    this.router.navigate(['books', bookId]);
  }

  addBookToCart(book: Book) {
    this.cartService.addBook(book);
  }
}
