import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  booksLength = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.selectedBooks.subscribe(books => {
      this.booksLength = books.length;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
