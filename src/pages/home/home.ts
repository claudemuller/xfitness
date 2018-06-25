import { Component } from '@angular/core';

import { MemberManagementPage } from '../add-members/member-management';
import { StartWorkoutPage } from '../start-workout/start-workout';

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
    this._navigationProvider.push(StartWorkoutPage)
  }

  public addMembersClicked(): void {
    this._navigationProvider.push(MemberManagementPage)
  }
}
