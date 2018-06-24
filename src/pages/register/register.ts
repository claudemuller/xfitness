import { Component } from '@angular/core';
import { IonicPage, AlertController, Loading, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { NavigationProvider } from '../../providers/navigation/navigation';

import { ICredentialsInterface } from '../../providers/auth/credentials.interface';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public registerCredentials: ICredentialsInterface = {name: '', email: '', password: ''};

  private _loading: Loading;
  private _createSuccess: boolean = false;

  constructor(private _navProvider: NavigationProvider,
              private _authProvider: AuthProvider,
              private _alertController: AlertController,
              private _loadingController: LoadingController) {
  }

  public register(): void {
    this._showLoading();
    this._authProvider.register(this.registerCredentials).subscribe(response => {
      if (response.success) {
        this._createSuccess = true;
        this._showPopup('Success', response.message);
      } else {
        let error = '';

        if (typeof(response.error) === 'object') {
          error = Object.keys(response.error).reduce((err, pair) => {
            const [key, value] = pair;
            return `${err}${key}:\n${value}`;
          });
        } else {
          error = response.error;
        }

        this._showPopup('Error', error);
      }
    }, error => {
      this._showPopup('Error', error.message);
    });
  }

  public goToLogin(): void {
    this._navProvider.popTo(LoginPage);
  }

  private _showLoading(): void {
    this._loading = this._loadingController.create({
      content: 'Registering...',
      dismissOnPageChange: true
    });
    this._loading.present();
  }

  private _showPopup(title: string, text: string): void {
    this._loading.dismiss();

    const alert = this._alertController.create({
      title,
      subTitle: text,
      buttons: [{
        text: 'OK',
        handler: data => {
          if (this._createSuccess) {
            this._navProvider.popToRoot();
          }
        }
      }]
    });

    alert.present();
  }
}
