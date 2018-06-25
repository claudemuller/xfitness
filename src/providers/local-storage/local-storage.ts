import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { ILoginDataInterface } from './login-data.interface';

@Injectable()
export class LocalStorageProvider {
  constructor(public _storage: Storage) {
  }

  public login(data: ILoginDataInterface): Promise<any> {
    return this._storage.set('user', data);
  }

  public getUser(): Promise<any> {
    return this._storage.get('user');
  }

  public logout(): Promise<any> {
    return this._storage.remove('user');
  }
}
