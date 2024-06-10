import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterModule,
    ConsultationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Enviar el formulario
      console.log(this.contactForm.value);
    }
  }

}
