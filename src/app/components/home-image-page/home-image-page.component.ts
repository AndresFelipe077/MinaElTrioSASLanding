import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';
import { NotificationService } from '../../services/notification.service';
import { ToastService, toastTypes } from '../../services/toast.service';

@Component({
  selector: 'home-image-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-image-page.component.html',
  styleUrl: './home-image-page.component.css'
})
export class HomeImagePageComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService,
    private notificationService: NotificationService,
    private toast: ToastService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

  openNotification() {
    this.toast.initiate({
      title: 'Hey whats up',
      content: 'Bienvenido a un mundo increible!!!',
      type: toastTypes.error
    });
  }

}
