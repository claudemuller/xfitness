import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

@Injectable()
export class NavigationProvider {
  private _rootNav: NavController;

  public initRootNav(rootNav: NavController): void {
    this._rootNav = rootNav;
  }

  public push(page: Page): void {
    this._rootNav.push(page);
  }

  public popToRoot(): void {
    this._rootNav.popToRoot();
  }

  public popTo(page: Page): void {
    this._rootNav.popTo(page);
  }

  public pop(): void {
    this._rootNav.pop();
  }

  public setRoot(page: Page): void {
    this._rootNav.setRoot(page);
  }
}
