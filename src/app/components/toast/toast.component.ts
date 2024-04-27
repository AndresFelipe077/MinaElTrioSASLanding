import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          visibility: 'hidden',
          right: '-400px',
        })
      ),
      state(
        'open',
        style({
          right: '40px',
        })
      ),
      transition('open <=> closed', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class ToastComponent {

  dark: string = '';

  @ViewChild('element', { static: false }) progressBar?: ElementRef;

  progressInterval: any;

  private toastSubscription: Subscription | undefined;

  constructor(
    private themeColorNumber: ThemeColorNumberService,
    public toastService: ToastService
  ) {
    this.toastSubscription = this.toastService.open.subscribe((data) => {
      console.log(data);
      if (data.show) {
        this.countDown();
      }
    });
  }

  // ngOnDestroy() {
  //   if (this.toastSubscription) {
  //     this.toastSubscription.unsubscribe();  // Desuscribirse al destruir el componente
  //   }
  // }

  countDown() {
    this.progressBar!.nativeElement.style.width =
      this.toastService.data.progressWidth;

    this.progressInterval = setInterval(() => {
      const width = parseInt(this.progressBar!.nativeElement.style.width, 10);

      if (width <= 0) {
        this.toastService.hide();
        clearInterval(this.progressInterval);
        return;
      }

      this.toastService.data.progressWidth = String(width - 2);
      this.progressBar!.nativeElement.style.width =
        this.toastService.data.progressWidth + '%';
    }, 150);
  }

  time() {
    clearInterval(5);
    this.close();
  }

  stopCountDown() {
    clearInterval(this.progressInterval);
  }

  close() {
    this.toastService.hide();
    clearInterval(this.progressInterval);
    return;
  }
}
