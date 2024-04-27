import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';

@Component({
  selector: 'terms-and-conditions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

}
