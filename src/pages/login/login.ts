import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController, Loading } from 'ionic-angular';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { AuthProvider } from '../../providers/auth/auth';

import { ICredentialsInterface } from '../../providers/auth/credentials.interface';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginCredentials: ICredentialsInterface = {email: '', password: ''};

  private _loading: Loading;

  constructor(private _navigationProvider: NavigationProvider,
              private _authProvider: AuthProvider,
              private _alertController: AlertController,
              private _loadingController: LoadingController) {
  }

  public createAccount(): void {
    this._navigationProvider.push(RegisterPage);
  }

  public login(): void {
    this._showLoading();
    this._authProvider.login(this.loginCredentials).subscribe(allowed => {
      if (allowed) {
        this._navigationProvider.setRoot(HomePage)
      } else {
        this._showError('Access Denied');
      }
    }, error => {
      this._showError(error);
    });
  }

  private _showLoading(): void {
    this._loading = this._loadingController.create({
      content: 'Logging in...',
      dismissOnPageChange: true
    });
    this._loading.present();
  }

  private _showError(text: string): void {
    this._loading.dismiss();

    const alert = this._alertController.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }
}
