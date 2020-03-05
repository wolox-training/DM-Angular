import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import * as Books from '../../books.actions';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  open = false;
  $books: Observable<Book[]>;

  constructor(private renderer: Renderer2, private modalService: ModalService, private store: Store<AppState>) { }

  ngOnInit() {
    this.modalService.modal.subscribe(open => {
      this.openModal(open);
    });
    this.$books = this.store.select('book');
  }

  openModal(open: boolean) {
    this.open = open;
    if (open) {
      this.renderer.setAttribute(document.body, 'style', 'overflow: hidden');
    } else {
      this.renderer.setAttribute(document.body, 'style', 'overflow: auto');
    }
  }

  removeBook(index: number) {
    this.store.dispatch(new Books.RemoveBook(index));
  }

}
