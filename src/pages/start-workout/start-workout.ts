import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { WorkoutsProvider } from '../../providers/workouts/workouts';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { AlertProvider } from '../../providers/alert/alert';

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
              private _alertController: AlertController,
              private _alertProvider: AlertProvider) {
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
      const endTime = Date.now();

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
              this._alertProvider.showLoading('Saving workout...');

              this._workoutsProvider.saveWorkout(this.attendingMembers, startTime, endTime).subscribe(response => {
                this._alertProvider.dismissLoading();

                this._showPopup('Success', response.message);
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

  private _showPopup(title: string, text: string, page: Page): void {
    const alert = this._alertController.create({
      title,
      subTitle: text,
      buttons: [{
        text: 'OK',
        handler: data => {
          this._clearWorkoutData(HomePage); //WorkoutsPage);
        }
      }]
    });

    alert.present();
  }
}
