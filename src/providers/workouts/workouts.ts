import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LocalStorageProvider } from '../local-storage/local-storage';
import { AuthProvider } from '../auth/auth';
import { SettingsProvider } from '../settings/settings';

@Injectable()
export class WorkoutsProvider {
  constructor(private _http: HttpClient,
              private _authProvider: AuthProvider,
              private _localStorageProvider: LocalStorageProvider,
              private _settingsProvider: SettingsProvider) {
    this._httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };
  }

  public startWorkout(): void {
    this._localStorageProvider.startWorkout();
  }

  public saveWorkout(members, workoutStart: number, workoutEnd: number): Observable<any> {
    const token: string = this._authProvider.currentUser.token,
      body = new HttpParams()
        .set('token', token)
        .set('members', JSON.stringify(members))
        .set('session_start', workoutStart)
        .set('session_end', workoutEnd);

    return this._http.post(this._settingsProvider.apiUrl + '/workout', body.toString(), this._httpOptions);
  }
}
