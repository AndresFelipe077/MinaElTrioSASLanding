import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation.component';

declare function servicesFaqs(): any;
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    RouterModule,
    ConsultationComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      servicesFaqs();
    }, 50);
  }

}
