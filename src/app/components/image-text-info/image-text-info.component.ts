import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';

@Component({
  selector: 'image-text-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-text-info.component.html',
  styleUrl: './image-text-info.component.css'
})
export class ImageTextInfoComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

}
