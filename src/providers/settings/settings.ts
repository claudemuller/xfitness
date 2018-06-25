import { Injectable } from '@angular/core';

import { AuthProvider } from '../auth/auth';

@Injectable()
export class SettingsProvider {
  private _apiUrl: string;
  private _name: string;

  constructor(private _authProvider: AuthProvider) {
    // get from localstorage and use that if not use default
    this._apiUrl = 'https://xfitness.dxt.rs/api';
    this._name = this._authProvider.currentUser().name;
  }

  get apiUrl(): string {
    return this._apiUrl;
  }

  get name(): string {
    return this._name;
  }
}
