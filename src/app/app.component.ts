import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContainerListInfoComponent } from './components/container-list-info/container-list-info.component';
import { ImageTextInfoComponent } from './components/image-text-info/image-text-info.component';
import { HomeImagePageComponent } from './components/home-image-page/home-image-page.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { HttpClient } from '@angular/common/http';

declare function ScrollTrigger(e: any, t: any): void;
declare function ScrollSmoother(e: any, t: any): void;
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

  private once: boolean = true;


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    AOS.init({
      once: this.once,
    });
    setTimeout(() => {
      this.loadScript('./assets/js/ScrollTrigger.min.js').then(() => {
        // Una vez que el script se ha cargado, puedes acceder al objeto global
        // y utilizar el módulo ScrollSmoother si está diseñado para estar disponible globalmente
        if (window && 'ScrollTrigger' in window) {
          const ScrollTriggerGlobal = (window as any).ScrollSmoother;
          // Ahora puedes utilizar ScrollSmootherGlobal aquí
          // Por ejemplo:
          console.log('In scrollTrigger');
          
          ScrollTrigger(this, function(e: any) { });

        }
      }).catch(error => {
        console.error('Error al cargar el script:', error);
      });
      this.loadScript('./assets/js/ScrollSmoother.min.js').then(() => {
        // Una vez que el script se ha cargado, puedes acceder al objeto global
        // y utilizar el módulo ScrollSmoother si está diseñado para estar disponible globalmente
        if (window && 'ScrollSmoother' in window) {
          const ScrollSmootherGlobal = (window as any).ScrollSmoother;
          // Ahora puedes utilizar ScrollSmootherGlobal aquí
          // Por ejemplo:
          console.log('ScroolSmoother');
          
          ScrollSmoother(this, function(e: any) { });

        }
      }).catch(error => {
        console.error('Error al cargar el script:', error);
      });
    }, 50);
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
