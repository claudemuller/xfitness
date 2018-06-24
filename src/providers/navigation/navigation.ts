import { Injectable } from '@angular/core';
import { NavController, Page } from 'ionic-angular';

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
