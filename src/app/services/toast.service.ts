import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum toastTypes {
  error,
  success,
}

export interface ToastData {
  title?: string;
  content: string;
  show?: boolean;
  type?: toastTypes; // Default error
  progressWidth?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  data!: ToastData;
  public open = new Subject<ToastData>();

  constructor() {
    this.data = { type: toastTypes.error, title: '', content: '', show: false, progressWidth: '100%' };
  }

  initiate(data: ToastData) {
    console.log(data);
    
    if (data.type) {
      this.data.type = toastTypes.error;
    }
    this.data = { ...data, show: true, progressWidth: '100%' };
    this.open.next(this.data);
  }

  hide() {
    this.data = { ...this.data, show: false };
    this.open.next(this.data);
  }
}
