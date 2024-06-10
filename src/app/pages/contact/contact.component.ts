import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultationComponent } from '../../components/consultation/consultation.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private toastr: ToastrService
  ) {
    this.contactForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  /**
   * Create new contact
   * @returns void
   */
  onSubmit() {
    
    if (this.contactForm.valid) {
      let contact: ContactModel = {
        full_name: this.contactForm.get('full_name')?.value,
        email: this.contactForm.get('email')?.value,
        phone: this.contactForm.get('phone')?.value != "" ? this.contactForm.get('phone')?.value : null,
        message: this.contactForm.get('message')?.value,
      }

      this.contactService.createContact(contact).subscribe({
        next: (response: ContactModel) => {
          console.log(response);
          this.toastr.success('El mensaje se envio exitosamente!!!', 'Mensaje enviado!');
        },
        error: (err) => {
          console.error(err);
          this.toastr.error('Ups, ocurrio un error inesperado, inténtalo de nuevo o más tarde.', 'Error');
        },
        complete: () => {
          console.log('Proceso de creación de contacto completado');
        }
      });

    } else {
      console.error('Información no valida');
    }
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
