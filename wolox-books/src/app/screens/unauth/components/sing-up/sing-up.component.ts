import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SPANISH_FORM_ERROR_MESSAGES } from '../../../../utils/constants';
import { MustMatch, patterns } from '../../../../utils/validators';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  form: FormGroup;
  public ErrorMessage = SPANISH_FORM_ERROR_MESSAGES;
  public Patterns = patterns;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(patterns.email.regex)]],
      password: ['', [Validators.required, Validators.pattern(patterns.password.regex)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(patterns.password.regex)]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.userService.createUser({
        email: this.form.get('email').value,
        password: this.form.get('password').value,
        password_confirmation: this.form.get('confirmPassword').value,
        first_name: this.form.get('name').value,
        last_name: this.form.get('surname').value,
        locale: 'en'
      }).subscribe(() => {
        this.router.navigate(['login']);
      },
        error => {
          alert(error);
        });
    }
  }
}
