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

  public startWorkout(): Promise<any> {
    return this._storage.set('workout_start', Date.now());
  }

  public getWorkoutStart(): Promise<any> {
    return this._storage.get('workout_start');
  }

  public endWorkout(): Promise<any> {
    return this._storage.get('workout_start');
  }

  public clearWorkoutData(): Promise<any> {
    return this._storage.remove('attendees').then(success => {
      return this._storage.remove('workout_start');
    });
  }

  public saveAttendingMembers(data: any): Promise<any> {
    return this._storage.set('attendees', data);
  }

  public getAttendingMembers(): Promise<any> {
    return this._storage.get('attendees');
  }
}
