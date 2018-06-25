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
import { MemberManagementPage } from '../pages/add-members/member-management';
import { StartWorkoutPage } from '../pages/start-workout/start-workout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderMenuComponent } from '../components/header-menu/header-menu';

import { NavigationProvider } from '../providers/navigation/navigation';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { MembersProvider } from '../providers/members/members';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    HomePage,
    AboutPage,
    SettingsPage,
    MemberManagementPage,
    StartWorkoutPage,
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
    StartWorkoutPage
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
    MembersProvider
  ]
})
export class AppModule {}
