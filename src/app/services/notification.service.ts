import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifyServe = new Subject();
  private clearnotifyServe = new Subject();
  notify$ = this.notifyServe.asObservable();
  clear$ = this.clearnotifyServe.asObservable();
  constructor() { }

  showNotification(message: string, ) {
    this.notifyServe.next(message);
  }

}
