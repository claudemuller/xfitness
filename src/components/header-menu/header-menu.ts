import { Component } from '@angular/core';
import { App, Page, Platform } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';

import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  public pages: Array<{title: string, component: Page, icon: string}>;

  constructor(public app: App,
              public platform: Platform,
              private navigationProvider: NavigationProvider) {

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

  public openPage(title: string) {
    const page: Page = this.pages.find(page => page.title === title);

    this.navigationProvider.push(page.component)
  }

  public logoutClicked() {
    // do logout

    this.navigationProvider.push(HomePage)
  }

  public exitClicked() {
    this.platform.ready().then(() => {
      this.platform.exitApp();
    }).catch(error => {
      // TODO
    });
  }
}
