import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';

@Component({
  selector: 'container-list-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-list-info.component.html',
  styleUrl: './container-list-info.component.css'
})
export class ContainerListInfoComponent implements OnInit{

  dark: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

}
