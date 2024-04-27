import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'container-list-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-list-info.component.html',
  styleUrl: './container-list-info.component.css'
})
export class ContainerListInfoComponent implements OnInit{


  constructor(
  ){}

  ngOnInit(): void {
  }

}
