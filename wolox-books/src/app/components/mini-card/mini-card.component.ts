import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {

  @Input() imageURL;
  @Input() title: string;
  @Input() publisher: string;

  defaultImageURL = '/assets/book-cover.png';
}
