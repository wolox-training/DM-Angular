import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { SingUpComponent } from './screens/unauth/components/sing-up/sing-up.component';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './screens/unauth/components/login/login.component';
import { TokenInterceptorService } from './services/token.interceptor';
import { ToCamelCaseInterceptor } from './services/to-camel-case.interceptor';
import { HomeComponent } from './screens/auth/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SingUpComponent,
    InputComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ToCamelCaseInterceptor,
      multi: true
    },
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
