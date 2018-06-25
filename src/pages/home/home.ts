import { Component } from '@angular/core';

import { MemberManagementPage } from '../add-members/member-management';
import { StartWorkoutPage } from '../start-workout/start-workout';

import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private _navigationProvider: NavigationProvider) {
  }

  public startWorkoutClicked(): void {
    this._navigationProvider.push(StartWorkoutPage)
  }

  public addMembersClicked(): void {
    this._navigationProvider.push(MemberManagementPage)
  }
}
