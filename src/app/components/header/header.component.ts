import { Component, OnInit } from '@angular/core';

declare function showToggleMenuMobile(): void;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      showToggleMenuMobile();
    }, 50);
  }

}
