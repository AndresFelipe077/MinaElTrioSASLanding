import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button-floating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-floating.component.html',
  styleUrl: './button-floating.component.css'
})
export class ButtonFloatingComponent {

  showFloatingButton: boolean = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showFloatingButton = window.scrollY > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
