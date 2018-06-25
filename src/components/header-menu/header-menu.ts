import { Component } from '@angular/core';
import { App, Platform } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { AboutPage } from '../../pages/about/about';
// import { SettingsPage } from '../../pages/settings/settings';
import { LoginPage } from '../../pages/login/login';
import { MemberManagementPage } from '../../pages/member-management/member-management';
import { WorkoutsPage } from '../../pages/workouts/workouts';

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
      {title: 'Workouts', component: WorkoutsPage, icon: 'list-box'},
      {title: 'Member Management', component: MemberManagementPage, icon: 'people'},
      // {title: 'Settings', component: SettingsPage, icon: 'settings'},
      {title: 'About', component: AboutPage, icon: 'information-circle'}
    ];
  }

  public homeClicked(): void {
    this._navigationProvider.setRoot(HomePage);
  }

  public openPage(title: string): void {
    const page: IPageInterface = this.pages.find(page => page.title === title);

    this._navigationProvider.push(page.component)
  }

  public logoutClicked(): void {
    this._authProvider.logout().then(success => {
      this._navigationProvider.setRoot(LoginPage);
    });
  }

  public exitClicked(): void {
    this.platform.ready().then(() => {
      this.platform.exitApp();
    }).catch(error => {
    });
  }
}
