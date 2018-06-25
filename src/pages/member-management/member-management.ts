import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { MembersProvider } from '../../providers/members/members';
import { NavigationProvider } from '../../providers/navigation/navigation';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

import { IMemberInterface } from './member.interface';

@IonicPage()
@Component({
  selector: 'page-member-management',
  templateUrl: 'member-management.html',
})
export class MemberManagementPage {
  public members: Array<IMemberInterface> = [];
  public newMember: string;

  constructor(private _membersProvider: MembersProvider,
              private _navigationProvider: NavigationProvider,
              private _authProvider: AuthProvider,
              private _alertProvider: AlertProvider) {
  }

  public ionViewDidLoad(): void {
    this._alertProvider.showLoading('Loading members...', false);

    this._membersProvider.getMembers().subscribe(response => {
      if (response.success) {
        this.members = response.data;

        this._alertProvider.dismissLoading();
      }
    }, error => {
      if (error) {
        this._authProvider.checkTokenExpired(error);

        this._navigationProvider.setRoot(LoginPage);
      }
    });
  }

  public addMemberClicked(): void {
    if (this.newMember) {
      this.members.unshift({name: this.newMember});
      this.newMember = '';
    }
  }

  public removeMemberClicked(memberId: number): void {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === memberId) {
        this.members[i]['remove'] = true;
      }
    }
  }

  public updateMembersClicked(): void {
    this._alertProvider.showLoading('Updating members...', false);

    this._membersProvider.updateMembers(this.members).subscribe(response => {
      if (response.success) {
        this._alertProvider.showPopup('Success', response.message, HomePage);
      }
    }, error => {
      if (error) {
        this._authProvider.checkTokenExpired(error);

        this._navigationProvider.setRoot(LoginPage);
      }
    });
  }

  public activeMembers(): Array<Object> {
    return this.members.filter(member => !member.hasOwnProperty('remove'));
  }
}
