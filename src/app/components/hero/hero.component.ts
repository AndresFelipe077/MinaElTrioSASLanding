import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare function clients(): any;
@Component({
  selector: 'hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{


  constructor(
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      clients();
    }, 50);
  }
  

}
