import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public apiUrl: string;
  public name: string;

  constructor(private _settingsProvider: SettingsProvider) {
    this.apiUrl = this._settingsProvider.apiUrl;
    this.name = this._settingsProvider.name;
  }

  public saveSettingsClicked(): void {

  }
}
