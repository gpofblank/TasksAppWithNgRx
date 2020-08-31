import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alert, AlertType } from './models/alert';
import { AlertComponent } from './components/alert/alert.component';

export const alertDefault: Alert = {
  type: AlertType.INFO,
  message: 'This is an alert',
  closeButtonText: 'Close',
  confirmButtonText: 'OK',
  autoClose: false,
};

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  public showAlert(config: Alert) {}

  public success(config: Partial<Alert> = alertDefault) {
    this.snackBar.openFromComponent(AlertComponent, {
      data: { ...alertDefault, ...config, type: AlertType.SUCCESS }, duration: 3000

    });
  }

  public error(config: Partial<Alert>) {
    this.snackBar.openFromComponent(AlertComponent, {
      data: { ...alertDefault, ...config, type: AlertType.ERROR }, duration: 3000

    });
  }
}
