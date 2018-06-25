import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { WorkoutsProvider } from '../../providers/workouts/workouts';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-start-workout',
  templateUrl: 'start-workout.html',
})
export class StartWorkoutPage {
  public attendingMembers: Array<Object> = [];
  public workoutDuration: number = 0;

  private _timer: number;

  constructor(private _navigationProvider: NavigationProvider,
              private _workoutsProvider: WorkoutsProvider,
              private _localStorageProvider: LocalStorageProvider,
              private _alertController: AlertController) {
  }

  public ionViewDidLoad(): void {
    this._localStorageProvider.getAttendingMembers().then(members => {
      this.attendingMembers = members;

      this._workoutsProvider.startWorkout();

      this._startTimer();
    });
  }

  public stopWorkoutTimerClicked(): void {
    clearTimeout(this._timer);

    this._localStorageProvider.endWorkout().then(startTime => {
      const endTime = Date.now(),
        workDuration = endTime - startTime;

      const confirm = this._alertController.create({
        title: 'Save the workout?',
        buttons: [
          {
            text: 'Nevermind',
            handler: () => {
              this._clearWorkoutData(HomePage);
            }
          },
          {
            text: 'Yes please',
            handler: () => {
              this._workoutsProvider.saveWorkout(this.attendingMembers, startTime, endTime).subscribe(response => {
                this._clearWorkoutData(SummaryPage);
              });
            }
          }
        ]
      });

      confirm.present();
    });
  }

  private _clearWorkoutData(page: Page): void {
    this._localStorageProvider.clearWorkoutData().then(success => {
      this._navigationProvider.setRoot(page)
    });
  }

  private _startTimer(): void {
    this._timer = setTimeout(i => {
      this.workoutDuration += 1;

      this._startTimer();
    }, 1000);
  }
}
