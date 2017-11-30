import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SignInPage} from "../pages/sign-in/sign-in";
import {SigninFormPage} from "../pages/signin-form/signin-form";
import {RegisterFormPage} from "../pages/register-form/register-form";

const PAGES_IMPORTED = [
  MyApp,
  SignInPage,
  HomePage,
  SigninFormPage,
  RegisterFormPage
];

@NgModule({
  declarations: [
    PAGES_IMPORTED
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PAGES_IMPORTED
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
