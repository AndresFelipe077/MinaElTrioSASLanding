import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../../services/theme-color-number.service';
import { InputComponent } from '../../input/input.component';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  dark: string = '';

  email: string = '';
  password: string = '';

  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    private themeColorNumber: ThemeColorNumberService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email:    ['',   [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = null;

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(({ data, error }) => {
      this.loading = false;
      if (error) {
        this.error = 'Error al iniciar sesión. Por favor, inténtelo de nuevo.';
        console.error('Error al iniciar sesión:', error);
      } else {
        console.log('Inicio de sesión exitoso:', data);
        this.router.navigate(['/']);
      }
    });
  }

}
