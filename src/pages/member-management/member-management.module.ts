import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MemberManagementPage } from './member-management';

@NgModule({
  declarations: [
    MemberManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberManagementPage),
  ],
})
export class MemberManagementModule {}
