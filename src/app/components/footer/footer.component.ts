import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ScrollToTopService } from '../../services/scroll-to-top.service';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  firstEmail: string = 'uvaeminaeltriosasentrenamiento@gmail.com';

  secondEmail: string = 'gatp.hseqintegral@gmail.com';

  constructor(private scrollToTopService: ScrollToTopService) {}

  goToTop() {
    this.scrollToTopService.scrollToTop();
  }

}
