import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';

@Component({
  selector: 'subscription-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-email.component.html',
  styleUrl: './subscription-email.component.css'
})
export class SubscriptionEmailComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

}
