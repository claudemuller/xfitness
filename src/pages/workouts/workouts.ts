import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { NavigationProvider } from '../../providers/navigation/navigation';
import { WorkoutsProvider } from '../../providers/workouts/workouts';
import { AlertProvider } from '../../providers/alert/alert';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {
  public workouts: any;

  constructor(private _navigationProvider: NavigationProvider,
              private _workoutsProvider: WorkoutsProvider,
              private _alertProvider: AlertProvider,
              private _authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    this._alertProvider.showLoading('Loading workouts...', false);

    this._workoutsProvider.getWorkouts().subscribe(response => {
      console.log(response);

      if (response) {
        if (response.success) {
          this.workouts = response.data;

          for (var i = 0; i < this.workouts.length; i++) {
            const end_time = new Date(this.workouts[i].session_end),
              start_time = new Date(this.workouts[i].session_start);
            this.workouts[i].duration = end_time - start_time;
            this.workouts[i].session_end = this.workouts[i].session_end.slice(this.workouts[i].session_end.indexOf(' '));
          }

          this._alertProvider.dismissLoading();
        }
      } else {
        this._alertProvider.showError('Error loading workouts :(');

        this._navigationProvider.pop();
      }
    }, error => {
      if (error) {
        this._authProvider.checkTokenExpired(error);

        this._navigationProvider.setRoot(LoginPage);
      }
    });
  }

  public toggleSection(i: number): void {
    this.information[i].open = !this.information[i].open;
  }

  public toggleItem(i: number, j: number): void {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
}
