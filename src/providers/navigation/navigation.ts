import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

@Injectable()
export class NavigationProvider {
  private _rootNav: NavController;

  public initRootNav(rootNav: NavController) {
    this._rootNav = rootNav;
  }

  public push(page: Page) {
    this._rootNav.push(page);
  }
}
