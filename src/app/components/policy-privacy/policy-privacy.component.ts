import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';

@Component({
  selector: 'policy-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policy-privacy.component.html',
  styleUrl: './policy-privacy.component.css'
})
export class PolicyPrivacyComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

}
