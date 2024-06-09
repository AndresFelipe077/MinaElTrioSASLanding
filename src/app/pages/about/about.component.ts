import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterModule,
    ConsultationComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
