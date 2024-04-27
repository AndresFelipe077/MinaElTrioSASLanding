import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare function inCrease(grid: HTMLElement): any;
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
      const grid = document.getElementById("win-grid");
      if (grid) {
        inCrease(grid);
      }
    }, 50);
  }

}
