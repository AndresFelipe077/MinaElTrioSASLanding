import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContainerListInfoComponent } from './components/container-list-info/container-list-info.component';
import { ImageTextInfoComponent } from './components/image-text-info/image-text-info.component';
import { HomeImagePageComponent } from './components/home-image-page/home-image-page.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ThemeColorNumberService } from './services/theme-color-number.service';
import { RegisterComponent } from './components/auth/register/register.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './services/notification.service';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterModule,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    LoginComponent,
    HeroComponent,
    ContainerListInfoComponent,
    ImageTextInfoComponent,
    HomeImagePageComponent,
    HomePageComponent,
    AlertsComponent,
    TermsAndConditionsComponent,
    RegisterComponent,
    NotificationComponent,
    ToastComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    NotificationService
  ]
})
export class AppComponent implements OnInit{

  dark: string = '';
  private once: boolean = true;

  constructor(
    private themeColorNumber: ThemeColorNumberService,
    private toast: ToastService
  ){}
  
  ngOnInit(): void {
    initFlowbite();
    this.dark = this.themeColorNumber.colorDark();
    AOS.init({
      once: this.once,
    });
  }

}
