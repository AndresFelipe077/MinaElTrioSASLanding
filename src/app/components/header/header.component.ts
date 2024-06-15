import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

declare function showToggleMenuMobile(): void;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @ViewChild('mobileNavDiv') mobileNavDiv!: ElementRef<HTMLElement>;
  @ViewChild('mobileNavDivOverlay') mobileNavDivOverlay!: ElementRef<HTMLElement>;
  @ViewChild('mobileNavToggleMenu') mobileNavToggleMenu!: ElementRef<HTMLElement>;

  email: string = 'minaeltriosas@gmail.com';

  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      showToggleMenuMobile();
    }, 50);
  }

  /**
   * Hidden menu for mobiles
   * @returns void
   */
  closeMenu() {
    this.mobileNavDiv.nativeElement.classList.remove('active_mobile_nav');
    this.mobileNavDivOverlay.nativeElement.classList.remove('active_mobile_nav');
    this.mobileNavToggleMenu.nativeElement.children[0].classList.remove('hidden');
    this.mobileNavToggleMenu.nativeElement.children[1].classList.add('hidden');
  }

}
