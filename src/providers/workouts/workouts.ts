import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LocalStorageProvider } from '../local-storage/local-storage';

@Injectable()
export class WorkoutsProvider {
  constructor(private _http: HttpClient,
              private _localStorageProvider: LocalStorageProvider) {
  }

  public startWorkout(): void {
    this._localStorageProvider.startWorkout();
  }
}
