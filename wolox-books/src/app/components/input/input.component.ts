import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() type = 'text';
  @Input() errorMessage: string;
  @Input() customErrorName: string;
  @Input() customErrorMessage;

  constructor() { }

  ngOnInit() {
  }

  get field() {
    return this.form.get(this.name);
  }
}
