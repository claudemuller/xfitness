import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartWorkoutPage } from './start-workout';

@NgModule({
  declarations: [
    StartWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(StartWorkoutPage),
  ],
})
export class StartWorkoutPageModule {}
