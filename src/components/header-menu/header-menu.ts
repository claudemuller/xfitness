import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';
import { SettingsPage } from '../../pages/settings/settings';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { AuthProvider } from '../../providers/auth/auth';

import { IPageInterface } from './page.interface';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {
  public pages: Array<IPageInterface>;

  constructor(public app: App,
              public platform: Platform,
              private _navigationProvider: NavigationProvider,
              private _authProvider: AuthProvider) {

    this.pages = [
      {title: 'Dashboard', component: 'HomePage', icon: 'home'},
      {title: 'Previous Session Stats', component: 'HomePage', icon: 'stats'},
      {title: 'User Management', component: 'HomePage', icon: 'people'},
      {title: 'Settings', component: 'SettingsPage', icon: 'settings'},
      {title: 'About', component: 'AboutPage', icon: 'information-circle'}
    ];
  }

  public openPage(title: string): void {
    const page: IPageInterface = this.pages.find(page => page.title === title);

    this._navigationProvider.push(page.component)
  }

  public logoutClicked(): void {
    this._authProvider.logout();

    const home: IPageInterface = this.pages.find(page => page.title === 'Dashboard');

    this._navigationProvider.push(home.component)
  }

  public exitClicked(): void {
    this.platform.ready().then(() => {
      this.platform.exitApp();
    }).catch(error => {
      // TODO
    });
  }
}
