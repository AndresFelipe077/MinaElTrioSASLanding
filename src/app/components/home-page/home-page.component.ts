import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeImagePageComponent } from '../home-image-page/home-image-page.component';
import { HeroComponent } from '../hero/hero.component';
import { ContainerListInfoComponent } from '../container-list-info/container-list-info.component';
import { ImageTextInfoComponent } from '../image-text-info/image-text-info.component';
import { FunFactComponent } from '../fun-fact/fun-fact.component';
import { ServiceComponent } from '../service/service.component';
import { WorkingProcessComponent } from '../working-process/working-process.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { BlogComponent } from '../blog/blog.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { HttpClient } from '@angular/common/http';

declare const ScrollSmoother: any;
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeImagePageComponent,
    HeroComponent,
    ContainerListInfoComponent,
    FunFactComponent,
    ImageTextInfoComponent,
    ServiceComponent,
    WorkingProcessComponent,
    TestimonialComponent,
    BlogComponent,
    ConsultationComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadAndExecuteScript('./assets/js/ScrollTrigger.min.js');
      this.loadAndExecuteScript('./assets/js/ScrollSmoother.min.js');
    }, 50);
  }

  loadAndExecuteScript(scriptUrl: string): void {
    this.http.get(scriptUrl, { responseType: 'text' }).subscribe({
      next: (scriptContent: string) => {
        try {
          // Ejecuta el contenido del script
          eval(scriptContent);
        } catch (error) {
          console.error('Error al ejecutar el script:', error);
        }
      },
      error: (error: any) => {
        console.error('Error al cargar el script:', error);
      }
    });
  }

}
