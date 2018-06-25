import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreWorkoutPage } from './pre-workout';

@NgModule({
  declarations: [
    PreWorkoutPage,
  ],
  imports: [
    IonicPageModule.forChild(PreWorkoutPage),
  ],
})
export class PreWorkoutPageModule {}
