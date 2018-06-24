import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../app/user';

import { ICredentialsInterface } from './credentials.interface';

import { SettingsProvider } from '../settings/settings';

@Injectable()
export class AuthProvider {
  private _currentUser: User;

  constructor(private _http: HttpClient,
              private _settingsProvider: SettingsProvider) {
  }

  public login(credentials: ICredentialsInterface): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Please enter credentials');
    } else {
      // Do Post to login
      return Observable.create(observer => {
        const access = (credentials.password === 'pass' && credentials.email.toLowerCase().trim() === 'claude@dxt.rs');

        // console.log('- ', credentials.email, credentials.password, access);

        this._currentUser = new User('Claude', 'claude@dxt.rs');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials: ICredentialsInterface): Observable<any> {
    if (credentials.email === null || credentials.password === null || credentials.name === null) {
      return Observable.throw('Please enter credentials');
    } else {
        console.log('- ', JSON.stringify(credentials));

      const body = new HttpParams()
        .set('name', credentials.name)
        .set('email', credentials.email)
        .set('password', credentials.password);

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          })
        };

        return this._http.post(this._settingsProvider.apiUrl + '/register', body.toString(), httpOptions);
    }
  }

  public getUserInfo(): User {
    return this._currentUser;
  }

  public logout(): Observable<any> {
    return Observable.create(observer => {
      this._currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
