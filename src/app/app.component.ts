import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { NavigationProvider } from '../providers/navigation/navigation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) rootNav: Nav;

  public rootPage: any = HomePage;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private navigation: NavigationProvider) {
    this.initializeApp();
  }

  public ngOnInit(): void {
    this.navigation.initRootNav(this.rootNav);
  }


  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
