import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare function inCreaseLanding(): any;
declare function mouseMoveParallax(selectorId: string): void;
@Component({
  selector: 'home-image-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-image-page.component.html',
  styleUrl: './home-image-page.component.css'
})
export class HomeImagePageComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      inCreaseLanding();

      mouseMoveParallax("hero-mouse-move-anim");
      mouseMoveParallax("home-working-cursor-anim");
      mouseMoveParallax("consaltaion-mouse-move-anim");
      mouseMoveParallax("hero-three-cm-anim");
      mouseMoveParallax("home-one-about-mouse-anim");
      mouseMoveParallax("about-shape-mouse-anim");
      mouseMoveParallax("home-four-cta-mouse-move");
    }, 100);
  }

}
