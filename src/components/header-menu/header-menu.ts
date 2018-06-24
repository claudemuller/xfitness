import { Component } from '@angular/core';
import { App, Page, Platform } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  public pages: Array<{title: string, component: Page, icon: string}>;

  constructor(public app: App,
              public platform: Platform) {

    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Previous Session Stats', component: HomePage, icon: 'stats'},
      {title: 'User Management', component: HomePage, icon: 'people'},
      {title: 'Settings', component: HomePage, icon: 'settings'},
      {title: 'About', component: AboutPage, icon: 'information-circle'}
    ];
  }

  public ionViewDidLoad() {
    this.nav = this.app.getRootNav();
  }

  public openPage(page: Page) {
    this.nav.setRoot(page.component);
  }

  public logoutClicked() {
    // do logout

    this.rootNav.push('HomePage');
  }

  public exitClicked() {
    this.platform.exitApp();
  }
}
