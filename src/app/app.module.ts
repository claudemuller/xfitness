import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderMenuComponent } from '../components/header-menu/header-menu';

import { NavigationProvider } from '../providers/navigation/navigation';
import { SettingsProvider } from '../providers/settings/settings';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    HomePage,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavigationProvider,
    AppVersion,
    SettingsProvider,
    AuthProvider
  ]
})
export class AppModule {}
