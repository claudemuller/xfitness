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
      {title: 'Home', component: HomePage},
      {title: 'Previous Session Stats', component: HomePage},
      {title: 'User Management', component: HomePage},
      {title: 'Settings', component: HomePage},
      {title: 'About', component: HomePage}
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
