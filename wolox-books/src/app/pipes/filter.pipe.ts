import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], filter = ''): any {
    return books.filter(book => {
      const lowerCaseTitle = book.title.toLowerCase();
      const lowerCaseFilter = filter.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseFilter);
    });
  }

}
