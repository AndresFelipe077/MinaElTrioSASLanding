import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'image-text-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-text-info.component.html',
  styleUrl: './image-text-info.component.css'
})
export class ImageTextInfoComponent implements OnInit{


  constructor(
  ){}

  ngOnInit(): void {
  }

}
