import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController, Loading } from 'ionic-angular';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { AuthProvider } from '../../providers/auth/auth';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

import { ICredentialsInterface } from '../../providers/auth/credentials.interface';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

import { User } from '../../app/user';

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
              private _loadingController: LoadingController,
              private _localStorageProvider: LocalStorageProvider) {
  }

  public ionViewDidLoad(): void {
    this._authProvider.isLoggedIn().then(user => {
      if (user) {
        this._navigationProvider.setRoot(HomePage);
      }
    });
  }

  public createAccount(): void {
    this._navigationProvider.push(RegisterPage);
  }

  public login(): void {
    this._showLoading();

    this._authProvider.login(this.loginCredentials).subscribe(response => {
      if (response.success) {
        this._authProvider.currentUser = new User(response.data.name, response.data.email, response.data.token);
        this._localStorageProvider.login(this._authProvider.currentUser).then(success => {
          this._navigationProvider.setRoot(HomePage)
        });
      } else {
        let error = '';

        if (typeof(response.error) === 'object') {
          error = Object.keys(response.error).map((key) => {
            return response.error[key];
          }).join('\n');
        } else {
          error = response.error;
        }

        this._showError(error);
      }
    }, error => {
      this._showError(error.message);
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
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });

    alert.present();
  }
}
