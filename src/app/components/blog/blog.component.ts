import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

}
