import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController } from 'ionic-angular';

import { MembersProvider } from '../../providers/members/members';

@IonicPage()
@Component({
  selector: 'page-member-management',
  templateUrl: 'member-management.html',
})
export class MemberManagementPage {
  public members: Array<string> = [
    'John Doe',
    'Piet Snot'
  ];
  public newMember: string;

  private _loading: Loading;

  constructor(private _membersProvider: MembersProvider,
              private _loadingController: LoadingController) {
  }

  public ionViewDidLoad() {
    this._showLoading();

    this._membersProvider.getMembers().subscribe(members => {
      this._loading.dismiss();

      this.members = members;
    });
  }

  public addMemberClicked(): void {
    this.members.unshift(this.newMember);
  }

  public removeMemberClicked(member: string): void {
    this.members = this.members.filter(mem => mem !== member);
  }

  public saveMembersClicked(): void {
    this._membersProvider.saveMembers().subscribe(members => {
      this.members = members;
    });
  }

  private _showLoading(): void {
    this._loading = this._loadingController.create({
      content: 'Fetching members...',
      dismissOnPageChange: true
    });

    this._loading.present();
  }
}
