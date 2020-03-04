import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  $book: Observable<Book>;

  constructor(private bookService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.$book = this.bookService.getBookById(this.route.snapshot.paramMap.get('id'));
  }
}
