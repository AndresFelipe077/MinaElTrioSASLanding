import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
  providers: [
    NotificationService, // Asegúrate de agregar el servicio aquí
  ]
})
export class NotificationComponent implements OnInit {

  @ViewChild('notificationRef') notificationRef!: ElementRef;
  notificationType: string = '';
  showNotification: boolean = false;
  message: string = "";
  informationMessage: string = "";
  timeoutRef: any;

  constructor(
    public notificationService: NotificationService,
    private renderer2: Renderer2,
  ){}

  ngOnInit(): void {
  }

  hideNotification(): void {
    const notif = this.notificationRef.nativeElement;
    notif.className = "";
    this.renderer2.addClass(notif, "notification");
    setTimeout(() => { this.renderer2.addClass(notif, "active"); }, 200);
  }

  ngAfterViewInit(): void {
    this.notificationService.notify$.subscribe((res: any) => {
      const notif = this.notificationRef.nativeElement;
      this.notificationType = res.type;
      if (this.timeoutRef) { clearTimeout(this.timeoutRef); }
      this.hideNotification();
      this.renderer2.addClass(notif, res.type);
      for (let position of res.position) { this.renderer2.addClass(notif, position); }
      this.message = res.message;
      this.informationMessage = res.informationMessage;
      document.documentElement.style.setProperty("--time", (String(res.time) + "ms"));
      this.timeoutRef = setTimeout(() => {
        this.renderer2.removeClass(notif, "active");
        this.renderer2.removeClass(notif, res.type);
        for (let position of res.position) { this.renderer2.removeClass(notif, position); }
      }, (res.time));
    });
  }

}
