import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  $books: Observable<Book[]>;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.$books = this.bookService.getBooks();
  }
}
