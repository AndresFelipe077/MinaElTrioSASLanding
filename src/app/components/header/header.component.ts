import { Component, OnInit } from '@angular/core';
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

  email: string = 'minaeltriosas@gmail.com';

  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      showToggleMenuMobile();
    }, 50);
  }

}
