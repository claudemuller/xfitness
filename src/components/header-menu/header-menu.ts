import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';

import { NavigationProvider } from '../../providers/navigation/navigation';

import { IPageInterface } from './page.interface';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  public pages: Array<IPageInterface>;

  constructor(public app: App,
              public platform: Platform,
              private navigationProvider: NavigationProvider) {

    this.pages = [
      {title: 'Dashboard', component: HomePage, icon: 'home'},
      {title: 'Previous Session Stats', component: HomePage, icon: 'stats'},
      {title: 'User Management', component: HomePage, icon: 'people'},
      {title: 'Settings', component: HomePage, icon: 'settings'},
      {title: 'About', component: AboutPage, icon: 'information-circle'}
    ];
  }

  public openPage(title: string) {
    const page: IPageInterface = this.pages.find(page => page.title === title);

    this.navigationProvider.push(page.component)
  }

  public logoutClicked() {
    // do logout

    const home: IPageInterface = this.pages.find(page => page.title === 'Dashboard');

    this.navigationProvider.push(home.component)
  }

  public exitClicked() {
    this.platform.ready().then(() => {
      this.platform.exitApp();
    }).catch(error => {
      // TODO
    });
  }
}
