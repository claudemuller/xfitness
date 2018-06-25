import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { MembersProvider } from '../../providers/members/members';
import { AlertProvider } from '../../providers/alert/alert';
import { AuthProvider } from '../../providers/auth/auth';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

import { LoginPage } from '../login/login';
import { StartWorkoutPage } from '../start-workout/start-workout';

@IonicPage()
@Component({
  selector: 'page-pre-workout',
  templateUrl: 'pre-workout.html',
})
export class PreWorkoutPage {
  public members: Array<Object> = [];
  public attendingMembers: Array<Object> = [];
  public selectOptions: Object;

  constructor(private _navigationProvider: NavigationProvider,
              private _membersProvider: MembersProvider,
              private _alertProvider: AlertProvider,
              private _authProvider: AuthProvider,
              private _localStorageProvider: LocalStorageProvider) {
    this.selectOptions = {
      title: 'Members',
      subTitle: 'Select attending members'
    };
  }

  public ionViewDidLoad(): void {
    this._alertProvider.showLoading('Loading members...', false);

    this._membersProvider.getMembers().subscribe(response => {
      console.log(response);

      if (response) {
        if (response.success) {
          this.members = response.data;

          this._alertProvider.dismissLoading();
        }
      } else {
        this._alertProvider.showError('Error loading members :(');

        this._navigationProvider.pop();
      }
    }, error => {
      if (error) {
        this._authProvider.checkTokenExpired(error);

        this._navigationProvider.setRoot(LoginPage);
      }
    });
  }

  public chooseMemberClicked(members: any): void {
    this.attendingMembers = this.members.filter((member) => {
      return members.indexOf((member.id).toString()) > -1;
    });
  }

  public startWorkoutTimerClicked(): void {
    this._localStorageProvider.saveAttendingMembers(this.attendingMembers).then(success => {
      if (success) {
        this._navigationProvider.push(StartWorkoutPage);
      }
    });
  }
}
