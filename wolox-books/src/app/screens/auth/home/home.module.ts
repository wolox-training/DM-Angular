import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { MiniCardComponent } from 'src/app/components/mini-card/mini-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent,
    CardDetailComponent,
    MiniCardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
