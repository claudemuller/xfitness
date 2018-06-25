import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthProvider } from '../auth/auth';
import { SettingsProvider } from '../settings/settings';

import { IHttpOptionsInterface } from '../auth/http-options.interface';

@Injectable()
export class MembersProvider {
  private _httpOptions: IHttpOptionsInterface;

  constructor(public _http: HttpClient,
              private _authProvider: AuthProvider,
              private _settingsProvider: SettingsProvider) {
    this._httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
  }

  public getMembers(): any {
    const token: string = this._authProvider.currentUser.token;

    return this._http.get(`${this._settingsProvider.apiUrl}/members?token=${token}`, this._httpOptions);
  }

  public updateMembers(members): Observable<any> {
    const token: string = this._authProvider.currentUser.token,
      body = new HttpParams()
        .set('token', token)
        .set('members', JSON.stringify(members));

    return this._http.post(this._settingsProvider.apiUrl + '/members', body.toString(), this._httpOptions);
  }
}
