import { Component, OnInit } from '@angular/core';
import { ThemeColorNumberService } from '../../../services/theme-color-number.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { InputComponent } from '../../input/input.component';
import { UserModel } from '../../../models/user.model';
import { NotificationComponent } from '../../notification/notification.component';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    RouterLink,
    NotificationComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  dark: string = '';

  registerForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private themeColorNumber: ThemeColorNumberService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

  register() {
    if (this.registerForm.valid) {

      if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
        alert('Contraseñas distintas');
        return;
      }

      const userInput: UserModel = {
        userName: this.registerForm.value.userName,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        role: 'NORMAL',
      };

      this.authService.register(userInput).subscribe({
        next: (result) => {
          console.log('Usuario registrado exitosamente:', result);
          this.router.navigate(['/']);
          // Aquí puedes agregar código para redirigir al usuario a otra página o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
          // Aquí puedes agregar código para manejar errores, como mostrar un mensaje de error al usuario
        }
      });
    }
  }

}
