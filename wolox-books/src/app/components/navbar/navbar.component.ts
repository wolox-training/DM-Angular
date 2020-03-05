import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ModalService } from 'src/app/services/modal.service';

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
    private store: Store<AppState>,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.store.select('book').subscribe(books => {
      this.booksLength = books.length;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  openShopery() {
    this.modalService.openModal(true);
  }

}
