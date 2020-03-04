import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':id',
    component: CardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
