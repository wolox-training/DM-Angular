import { Action } from '@ngrx/store';
import { Book } from './models/book.model';

export const ADD_BOOK = 'add_book';
export const REMOVE_BOOK = 'remove_book';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) { }
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;

  constructor(public payload: number) { }
}

export type Actions = AddBook | RemoveBook;
