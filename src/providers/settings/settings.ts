import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {
  private _apiUrl: string;

  constructor() {
    // get from localstorage and use that if not use default
    this._apiUrl = 'http://xfitness.local/api'; //s://xfitness.dxt.rs/api';
  }

  get apiUrl(): string {
    return this._apiUrl;
  }
}
