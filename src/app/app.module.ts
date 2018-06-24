import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderMenuComponent } from '../components/header-menu/header-menu';

import { NavigationProvider } from '../providers/navigation/navigation';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    SettingsPage,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavigationProvider,
    AppVersion,
    SettingsProvider
  ]
})
export class AppModule {}
