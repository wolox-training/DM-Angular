import { Action } from '@ngrx/store';
import { Book } from './models/book.model';
import * as BookActions from './books.actions';

const initialState: Book[] = [];

export function reducer(state: Book[] = initialState, action: BookActions.Actions) {
  switch (action.type) {
    case BookActions.ADD_BOOK: return [...state, action.payload];
    case BookActions.REMOVE_BOOK: return state.filter((_, index) => index !== action.payload);
    default: return state;
  }
}
