import { Component } from '@angular/core';

import { MemberManagementPage } from '../member-management/member-management';
import { PreWorkoutPage } from '../pre-workout/pre-workout';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { AuthProvider } from '../../providers/auth/auth';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private _navigationProvider: NavigationProvider,
              private _authProvider: AuthProvider,
              private _localStorage: LocalStorageProvider) {
    this._localStorage.getUser().then(user => {
      this._authProvider.currentUser = user;
    });
  }

  public startWorkoutClicked(): void {
    this._navigationProvider.push(PreWorkoutPage)
  }

  public addMembersClicked(): void {
    this._navigationProvider.push(MemberManagementPage)
  }
}
