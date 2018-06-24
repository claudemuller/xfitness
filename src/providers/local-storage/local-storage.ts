import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ILoginDataInterface } from './login-data.interface';

@Injectable()
export class LocalStorageProvider {
  constructor(public _storage: Storage) {
  }

  public login(data: ILoginDataInterface): void {
    this._storage.set('token', data.token);
  }

  public getToken(): Promise<string> {
    return this._storage.get('token');
  }

  public logout(): Promise {
    this._storage.remove('token');
  }
}
