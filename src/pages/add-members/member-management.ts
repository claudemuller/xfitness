import { Component } from '@angular/core';
import { IonicPage, AlertController, Loading, LoadingController } from 'ionic-angular';

import { MembersProvider } from '../../providers/members/members';
import { NavigationProvider } from '../../providers/navigation/navigation';

import { HomePage } from '../home/home';

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
              private _loadingController: LoadingController,
              private _navigationProvider: NavigationProvider,
              private _alertController: AlertController) {
  }

  public ionViewDidLoad() {
    this._showLoading('Loading members...');

    this._membersProvider.getMembers().subscribe(members => {
      this.members = members.data;

      this._loading.dismiss();
    });
  }

  public addMemberClicked(): void {
    this.members.unshift({name: this.newMember});
    this.newMember = '';
  }

  public removeMemberClicked(memberId: integer): void {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === memberId) {
        this.members[i]['remove'] = true;
      }
    }
  }

  public updateMembersClicked(): void {
    this._showLoading('Saving members...');

    this._membersProvider.updateMembers(this.members).subscribe(response => {
      if (response.success) {
        this._loading.dismiss();
        this._showPopup('Success', response.message);
      }
    });
  }

  public activeMembers(): Array {
    return this.members.filter(member => !member.hasOwnProperty('remove'));
  }

  private _showLoading(message: string): void {
    this._loading = this._loadingController.create({
      content: message
    });

    this._loading.present();
  }

  private _showPopup(title: string, text: string): void {
    this._loading.dismiss();

    const alert = this._alertController.create({
      title,
      subTitle: text,
      buttons: [{
        text: 'OK',
        handler: data => {
          this._navigationProvider.setRoot(HomePage);
        }
      }]
    });

    alert.present();
  }
}