import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private subject = new Subject<any>();

  sendMessage(state = {}): void {
    this.subject.next(state);
  }

  clearState(): void {
    this.subject.next();
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
