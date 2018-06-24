import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SettingsProvider } from '../../providers/settings/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public apiUrl: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private settingsProvider: SettingsProvider) {
    this.apiUrl = this.settingsProvider.apiUrl;
  }
}
