import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../../app/user';

import { ICredentialsInterface } from './credentials.interface';

import { SettingsProvider } from '../settings/settings';
import { LocalStorageProvider } from '../local-storage/local-storage';
import { AlertProvider } from '../alert/alert';

import { IHttpOptionsInterface } from './http-options.interface';

@Injectable()
export class AuthProvider {
  private _currentUser: User;
  private _httpOptions: IHttpOptionsInterface;

  constructor(private _http: HttpClient,
              private _settingsProvider: SettingsProvider,
              private _localStorageProvider: LocalStorageProvider,
              private _alertProvider: AlertProvider) {
    this._httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
  }

  public login(credentials: ICredentialsInterface): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Please enter credentials');
    } else {
      const body = new HttpParams()
        .set('email', credentials.email)
        .set('password', credentials.password);

      return this._http.post(this._settingsProvider.apiUrl + '/login', body.toString(), this._httpOptions);
    }
  }

  public register(credentials: ICredentialsInterface): Observable<any> {
    if (credentials.email === null || credentials.password === null || credentials.name === null) {
      return Observable.throw('Please enter credentials');
    } else {
      const body = new HttpParams()
        .set('name', credentials.name)
        .set('email', credentials.email)
        .set('password', credentials.password);

      return this._http.post(this._settingsProvider.apiUrl + '/register', body.toString(), this._httpOptions);
    }
  }

  public checkTokenExpired(response: any): void {
    if (!response.error.success && response.error.message === 'Token has expired') {
      this._alertProvider.showError('Your token has expired. Please log in again');

      this._localStorageProvider.logout();
    }
  }

  public isLoggedIn(): Promise<any> {
    return this._localStorageProvider.getUser();
  }

  public logout(): Promise<any> {
    return this._localStorageProvider.logout();
  }

  get currentUser(): User {
    return this._currentUser;
  }

  set currentUser(value: User) {
    this._currentUser = value;
  }
}
