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

// declare function inCreaseLanding(): any;
declare function mouseMoveParallax(selectorId: string): void;
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
    setTimeout(() => {
      this.inCreaseLanding();

      mouseMoveParallax("hero-mouse-move-anim");
      mouseMoveParallax("home-working-cursor-anim");
      mouseMoveParallax("consaltaion-mouse-move-anim");
      mouseMoveParallax("hero-three-cm-anim");
      mouseMoveParallax("home-one-about-mouse-anim");
      mouseMoveParallax("about-shape-mouse-anim");
      mouseMoveParallax("home-four-cta-mouse-move");
    }, 100);
  }


  inCreaseLanding(): void {
    const grid = document.getElementById("win-grid") as HTMLElement | null;
    if (grid) {
      for (let i = 0; i < 1000; i++) {
        const newElement = document.createElement("div");
        newElement.classList.add("win-btn");
        newElement.id = i.toString();
        grid.appendChild(newElement);
      }

      const offset = 49;
      const angles: number[] = [];
      for (let i = 0; i <= 360; i += 45) {
        angles.push((i * Math.PI) / 180);
      }
      let nearBy: HTMLElement[] = [];

      function clearNearBy(): void {
        nearBy.forEach((e) => (e.style.borderImage = ''));
        nearBy = [];
      }

      document.querySelectorAll(".win-btn").forEach((element) => {
        const b = element as HTMLDivElement;
        b.onmouseleave = (e) => {
          const target = e.target as HTMLElement | null;
          if (target) {
            target.style.borderImage = 'none'; // Establecer a 'none' en lugar de null
            target.style.border = "1px solid transparent";
          }
        };

        b.onmouseenter = () => {
          clearNearBy();
        };

        b.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = (e.target as HTMLElement).getBoundingClientRect();
          const x = e.clientX - rect.left; // x position within the element.
          const y = e.clientY - rect.top; // y position within the element.
          // e.target.style.borderImage = `radial-gradient(circle at ${x}px ${y}px , rgba(121, 74, 255,0.25),rgba(121, 74, 255,0) )`;
          (e.target as HTMLElement).style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(121, 74, 255,0.7),rgba(121, 74, 255,0.4),rgba(121, 74, 255,0),#eaebf0,transparent ) 9 / 2px / 0px stretch `;
        });

      });

      const body = document.querySelector(".win-grid") as HTMLElement | null;
      if (body) {
        body.addEventListener("mousemove", (e) => {
          const x = e.x;
          const y = e.y;

          clearNearBy();
          nearBy = angles.reduce((acc: HTMLElement[], rad: number) => {
            const cx = Math.floor(x + Math.cos(rad) * offset);
            const cy = Math.floor(y + Math.sin(rad) * offset);
            const element = document.elementFromPoint(cx, cy) as HTMLElement | null;

            if (element && element.className === "win-btn" && acc.findIndex((ae) => ae.id === element.id) < 0) {
              const brect = element.getBoundingClientRect();
              const bx = x - brect.left;
              const by = y - brect.top;
              if (!element.style.borderImage) {
                element.style.borderImage = `radial-gradient(${offset * 2}px ${offset * 2}px at ${bx}px ${by}px,rgba(121, 74, 255,0.7),rgba(121, 74, 255,0.1),transparent ) 9 / 1px / 0px stretch`;
              }
              return [...acc, element];
            }
            return acc;
          }, []);
        });
        if (body) {
          body.onmouseleave = () => {
            clearNearBy();
          };
        }        
      }
    }
  }

}
