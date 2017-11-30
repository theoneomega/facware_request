import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SigninFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin-form',
  templateUrl: 'signin-form.html',
})
export class SigninFormPage {
  user = {
    password: "",
    username: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninFormPage');
  }

  logForm() {
    console.log(this.user);
  }

}
