import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  public pages: Array<{title: string, component: any}>;

  constructor(public app: App,
              public platform: Platform) {
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Previous Session Stats', component: HomePage, icon: 'stats'},
      {title: 'User Management', component: HomePage, icon: 'people'},
      {title: 'Settings', component: HomePage, icon: 'settings'},
      {title: 'About', component: HomePage, icon: 'information-circle'}
    ];
  }

  public logoutClicked() {
    // do logout

    const nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

  public exitClicked() {
    this.platform.exitApp();
  }
}
