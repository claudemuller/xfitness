import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { MemberManagementPage } from '../pages/member-management/member-management';
import { PreWorkoutPage } from '../pages/pre-workout/pre-workout';
import { StartWorkoutPage } from '../pages/start-workout/start-workout';
import { WorkoutsPage } from '../pages/workouts/workouts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderMenuComponent } from '../components/header-menu/header-menu';

import { NavigationProvider } from '../providers/navigation/navigation';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { MembersProvider } from '../providers/members/members';
import { WorkoutsProvider } from '../providers/workouts/workouts';
import { AlertProvider } from '../providers/alert/alert';

import { TimerPipe } from '../pipes/timer/timer';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    HomePage,
    AboutPage,
    SettingsPage,
    MemberManagementPage,
    PreWorkoutPage,
    TimerPipe,
    StartWorkoutPage,
    WorkoutsPage,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    HomePage,
    AboutPage,
    SettingsPage,
    MemberManagementPage,
    PreWorkoutPage,
    StartWorkoutPage,
    WorkoutsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavigationProvider,
    AppVersion,
    SettingsProvider,
    AuthProvider,
    LocalStorageProvider,
    MembersProvider,
    WorkoutsProvider,
    AlertProvider
  ]
})
export class AppModule {}
