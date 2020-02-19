import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SPANISH_FORM_ERROR_MESSAGES, PATTERNS } from '../utils/constants';
import { MustMatch } from '../utils/validators';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  form: FormGroup;
  public ErrorMessage = SPANISH_FORM_ERROR_MESSAGES;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(PATTERNS.EMAIL)]],
      password: ['', [Validators.required, Validators.pattern(PATTERNS.ONE_DIGIT_ONE_LOWERCASE_ONE_UPPERCASE)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(PATTERNS.ONE_DIGIT_ONE_LOWERCASE_ONE_UPPERCASE)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  submitForm() {
    if (this.form.valid) {
      console.log({
        user: {
          email: this.form.get('email').value,
          password: this.form.get('password').value,
          password_confirmation: this.form.get('confirmPassword').value,
          first_name: this.form.get('name').value,
          last_name: this.form.get('surname').value,
          locale: 'en'
        }
      });
    }
  }
}
