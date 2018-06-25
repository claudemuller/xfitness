import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

import { NavigationProvider } from '../navigation/navigation';

@Injectable()
export class AlertProvider {
  private _loading: Loading;

  constructor(private _loadingController: LoadingController,
              private _alertController: AlertController,
              private _navigationProvider: NavigationProvider) {
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

  public showPopup(title: string, text: string, page: Page): void {
    this._loading.dismiss();

    const alert = this._alertController.create({
      title,
      subTitle: text,
      buttons: [{
        text: 'OK',
        handler: data => {
          this._navigationProvider.setRoot(page);
        }
      }]
    });

    alert.present();
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
