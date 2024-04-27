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
export class HomePageComponent implements OnInit{


  constructor(
  ){}

  ngOnInit(): void {
  }

}
