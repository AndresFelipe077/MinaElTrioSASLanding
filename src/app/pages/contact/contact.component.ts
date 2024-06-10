import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactModel } from '../../models/contact.model';

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
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.contactForm.valid);
    
    if (this.contactForm.valid) {
      // Enviar el formulario
      console.log(this.contactForm.value);

      let contact: ContactModel = {
        full_name: this.contactForm.get('full_name')?.value,
        email: this.contactForm.get('email')?.value,
        phone: this.contactForm.get('phone')?.value ?? undefined,
        message: this.contactForm.get('message')?.value,
      }

    }
    console.error('Información no valida');
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.errors?.['required']) {
      return 'Este campo es obligatorio';
    } else if (control?.errors?.['email']) {
      return 'Ingresa un correo electrónico válido';
    }
    return '';
  }  

}
