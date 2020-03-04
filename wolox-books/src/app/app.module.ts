import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SingUpComponent } from './screens/unauth/components/sing-up/sing-up.component';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './screens/unauth/components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './screens/auth/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SingUpComponent,
    InputComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
