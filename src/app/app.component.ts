import {Component, ViewChild} from '@angular/core';
import {Platform, Events} from 'ionic-angular';
import {Nav, MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SignInPage} from "../pages/sign-in/sign-in";
import {JwtHelper} from 'angular2-jwt';
import {HomePage} from "../pages/home/home";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SignInPage;
  jwtHelper: JwtHelper = new JwtHelper();
  account: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private events: Events,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.events.subscribe('camera:available', () => {

      });
      statusBar.styleDefault();
      splashScreen.hide();
      this.verifySession();
    });
  }

  verifySession() {
    if (localStorage.getItem('user') !== null) {
     // if (!this.jwtHelper.isTokenExpired(JSON.parse(localStorage.getItem('user')).auth_token)) {
       // this.buildAccountData();
        //if (localStorage.getItem('user') !== null) {
          //console.log('with project selected')
          this.nav.setRoot(HomePage);
          this.menuCtrl.enable(true, 'authenticated');
       // }
        // else {
        //   //console.log('without project selected')
        //   this.withoutProjectdMenu();
        // }
      // }
      // else {
      //   //console.log('without localStorage');
      //   this.unauthenticatedMenu();
      // }
    }
    else {
      //console.log('without localStorage');
      this.unauthenticatedMenu();
    }
  }


  /** when user doesn't has session*/
  unauthenticatedMenu() {
    //console.log('unauthenticatedMenu');
    this.rootPage = SignInPage;
    this.menuCtrl.enable(false, 'authenticated');
    this.menuCtrl.enable(false, 'account');
  }

  buildAccountData() {
    this.account = this.jwtHelper.decodeToken(JSON.parse(localStorage.getItem('userData')));
    //console.log('buildAccountData ' + this.account);
  }
}

