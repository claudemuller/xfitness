import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

@Injectable()
export class NavigationProvider {
  private rootNav: NavController;

  public initRootNav(rootNav: NavController) {
    this.rootNav = rootNav;
  }

  public push(page: Page) {
    this.rootNav.push(page);
  }
}
