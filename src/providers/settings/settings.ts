import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {
  private _apiUrl: string;

  constructor() {
    // get from localstorage and use that if not use default
    this._apiUrl = 'http://xfitness.local';
  }

  get apiUrl() {
    return this._apiUrl;
  }
}
