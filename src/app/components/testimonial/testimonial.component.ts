import { Component, OnInit } from '@angular/core';

declare function testimonialFunction(): any;
@Component({
  selector: 'testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      testimonialFunction();
    }, 50);
  }

}
