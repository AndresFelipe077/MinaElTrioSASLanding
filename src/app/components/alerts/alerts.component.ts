import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeColorNumberService } from '../../services/theme-color-number.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent implements OnInit{

  dark: string = '';

  @Input() title: string = '';
  @Input() message: string = '';
  @Input() typeAlert: string = '';

  constructor(
    private themeColorNumber: ThemeColorNumberService,
    private alertService: AlertService
  ){}

  ngOnInit(): void {
    this.dark = this.themeColorNumber.colorDark();
  }

  showInfoAlert() {
    this.alertService.showInfo('Esto es una alerta de información.');
  }

  showSuccessAlert() {
    this.alertService.showSuccess('Esto es una alerta de éxito.');
  }

  showErrorAlert() {
    this.alertService.showError('Esto es una alerta de error.');
  }

  showWarningAlert() {
    this.alertService.showWarning('Esto es una alerta de advertencia.');
  }

}
