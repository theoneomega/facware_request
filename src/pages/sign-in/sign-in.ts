import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SigninFormPage} from "../signin-form/signin-form";
import {RegisterFormPage} from "../register-form/register-form";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  login() {
    this.navCtrl.push(SigninFormPage);
  }

  register(){
    this.navCtrl.push(RegisterFormPage);
  }
}
