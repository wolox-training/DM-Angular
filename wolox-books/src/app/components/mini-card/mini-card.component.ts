import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {

  @Input() imageURL;
  @Input() title: string;
  @Input() publisher: string;
  @Output() cardClicked: EventEmitter<void> = new EventEmitter();

  defaultImageURL = '/assets/book-cover.png';

  clickCard() {
    this.cardClicked.emit();
  }
}
