import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public appName: string;
  public appVer: string;
  public appUrl: string;
  public appAuthor: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appVersion: AppVersion) {
  }

  public ionViewDidLoad() {
    this.appAuthor = 'Claude Müller';
    this.appUrl = 'https://xfitness.dxt.rs';
    this.appVersion.getAppName().then(name => this.appName = name);
    this.appVersion.getVersionNumber().then(version => this.appVer = version);
  }
}
