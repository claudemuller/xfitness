import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController } from 'ionic-angular';

import { MembersProvider } from '../../providers/members/members';

@IonicPage()
@Component({
  selector: 'page-member-management',
  templateUrl: 'member-management.html',
})
export class MemberManagementPage {
  public members: Array<string> = [];
  public newMember: string;

  private _loading: Loading;

  constructor(private _membersProvider: MembersProvider,
              private _loadingController: LoadingController) {
  }

  public ionViewDidLoad() {
    this._showLoading();

    this._membersProvider.getMembers().subscribe(members => {
      this.members = members.data;

      this._loading.dismiss();
    });
  }

  public addMemberClicked(): void {
    this.members.unshift(this.newMember);
  }

  public removeMemberClicked(memberId: integer): void {
    this.members = this.members.filter(mem => mem.id !== memberId);
  }

  public saveMembersClicked(): void {
    this._membersProvider.saveMembers(this.members).subscribe(members => {
      this.members = members;
    });
  }

  private _showLoading(): void {
    this._loading = this._loadingController.create({
      content: 'Fetching members...'
    });

    this._loading.present();
  }
}
