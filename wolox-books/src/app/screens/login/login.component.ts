import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { patterns } from 'src/app/utils/validators';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
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
      email: ['', [Validators.required, Validators.pattern(patterns.email.regex)]],
      password: ['', [Validators.required, Validators.pattern(patterns.password.regex)]]
    });
  }

  submitForm() {
    if (this.form.valid) {
      this.userService.loginUser({
        email: this.form.get('email').value,
        password: this.form.get('password').value
      }).subscribe(res => {
        console.log(res);
      },
      error => {
        alert(error);
      });
    }
  }

}
