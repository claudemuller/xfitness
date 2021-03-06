import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavigationProvider } from '../providers/navigation/navigation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) rootNav: Nav;

  public rootPage: any = 'LoginPage';

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private _navigation: NavigationProvider) {
    this.initializeApp();
  }

  public ngOnInit(): void {
    this._navigation.initRootNav(this.rootNav);
  }


  public initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
