import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModalService {

  private modalSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  modal = this.modalSource.asObservable();

  openModal(open: boolean) {
    this.modalSource.next(open);
  }
}
