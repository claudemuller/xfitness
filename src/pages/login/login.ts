import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController, Loading } from 'ionic-angular';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { AuthProvider } from '../../providers/auth/auth';

import { ICredentialsInterface } from '../../providers/auth/credentials.interface';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public registerCredentials: ICredentialsInterface = {email: '', password: ''};

  private _loading: Loading;

  constructor(private _navigationProvider: NavigationProvider,
              private _auth: AuthProvider,
              private _alertCtrl: AlertController,
              private _loadingCtrl: LoadingController) {
  }

  public createAccount(): void {
    this._navigationProvider.push('RegisterPage');
  }

  public login(): void {
    this._showLoading();
    this._auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this._navigationProvider.push(HomePage);
      } else {
        this._showError('Access Denied');
      }
    }, error => {
      this._showError(error);
    });
  }

  private _showLoading(): void {
    this._loading = this._loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this._loading.present();
  }

  private _showError(text: string): void {
    this._loading.dismiss();

    const alert = this._alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
