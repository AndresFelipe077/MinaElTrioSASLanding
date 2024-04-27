import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showInfo(message: string) {
    this.showAlert('blue', message);
  }

  showSuccess(message: string) {
    this.showAlert('green', message);
  }

  showError(message: string) {
    this.showAlert('red', message);
  }

  showWarning(message: string) {
    this.showAlert('yellow', message);
  }

  private showAlert(color: string, message: string) {
    // Aquí puedes implementar la lógica para mostrar la alerta en la interfaz de usuario,
    // ya sea mediante un componente de alerta o mediante el uso de Angular Material Dialog, etc.
    console.log(`[${color}] ${message}`);
  }
}
