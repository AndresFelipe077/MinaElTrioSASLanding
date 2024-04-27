import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContainerListInfoComponent } from './components/container-list-info/container-list-info.component';
import { ImageTextInfoComponent } from './components/image-text-info/image-text-info.component';
import { HomeImagePageComponent } from './components/home-image-page/home-image-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { HeaderComponent } from './components/header/header.component';

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
    HeroComponent,
    ContainerListInfoComponent,
    ImageTextInfoComponent,
    HomeImagePageComponent,
    HomePageComponent,
    TermsAndConditionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  ]
})
export class AppComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  loadScript(src: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = (event: Event) => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }


}
