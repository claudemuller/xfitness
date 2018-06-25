import { Injectable } from '@angular/core';

import { AuthProvider } from '../auth/auth';

@Injectable()
export class SettingsProvider {
  private _apiUrl: string;
  private _name: string;

  constructor() {

    // get from localstorage and use that if not use default
    this._apiUrl = 'http://xfitness.local/api'; //s://xfitness.dxt.rs/api';
    this._name = 'test';//this._authProvider.currentUser().name;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  get name(): string {
    return this._name;
  }
}
