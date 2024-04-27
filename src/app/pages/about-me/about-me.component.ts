import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProfileMiniComponent } from '../../components/card-profile-mini/card-profile-mini.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { SubscriptionEmailComponent } from '../../components/subscription-email/subscription-email.component';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';
import { ButtonFloatingComponent } from '../../components/button-floating/button-floating.component';
import { ExampleCodeComponent } from '../../components/example-code/example-code.component';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [
    CommonModule,
    CardProfileMiniComponent,
    CommentComponent,
    SubscriptionEmailComponent,
    ButtonFloatingComponent,
    ExampleCodeComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit{

  dark: string = '';

  showFloatingButton: boolean = true;

  isDarkMode: boolean = false; // Inicialízala según tus necesidades

  constructor(
    private themeColorNumber: ThemeColorNumberService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  } 

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showFloatingButton = window.scrollY > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
