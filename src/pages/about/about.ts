import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  private appName: string;
  private appVersion: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App) {
  }

  public ionViewDidLoad() {
    this.appName = this.app.getAppName();
    this.appVersion = this.app.getVersionNumber();
    this.appVersionCode = this.app.getVersionCode();
  }
}
