import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() isValid: boolean;
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitForm(event: Event) {
    event.preventDefault();
    this.formSubmitted.emit();
  }
}
