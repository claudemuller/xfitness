import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class AlertProvider {
  private _loading: Loading;

  constructor(private _loadingController: LoadingController,
              private _alertController: AlertController) {
  }

  public dismissLoading(): void {
    this._loading.dismiss();
  }

  public showLoading(text: string, dismissOnPageChange = true): void {
    this._loading = this._loadingController.create({
      content: text,
      dismissOnPageChange
    });

    this._loading.present();
  }

  public showError(text: string): void {
    this._loading.dismiss();

    const alert = this._alertController.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }
}
