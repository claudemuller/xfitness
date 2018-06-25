import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { WorkoutsProvider } from '../../providers/workouts/workouts';

@IonicPage()
@Component({
  selector: 'page-start-workout',
  templateUrl: 'start-workout.html',
})
export class StartWorkoutPage {
  public attendingMembers: Array<Object> = [];

  constructor(private _navigationProvider: NavigationProvider,
              private _workoutsProvider: WorkoutsProvider) {
  }

  public ionViewDidLoad(): void {
    this._workoutsProvider.startWorkout();

    this.attendingMembers = navParams.get('attendingMembers');
  }
}
