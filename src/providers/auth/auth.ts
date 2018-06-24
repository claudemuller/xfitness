import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../../app/user';

import { ICredentialsInterface } from './credentials.interface';

@Injectable()
export class AuthProvider {
  private _currentUser: User;

  public login(credentials: ICredentialsInterface): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Please enter credentials');
    } else {
      // Do Post to login
      return Observable.create(observer => {
        const access = (credentials.password === 'pass' && credentials.email.toLowerCase().trim() === 'claude@dxt.rs');

        this._currentUser = new User('Claude', 'claude@dxt.rs');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials: ICredentialsInterface): Observable<any> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Please enter credentials');
    } else {
      // Create the user
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
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
