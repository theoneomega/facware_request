import {Component} from '@angular/core';
/*import {NavController, NavParams} from 'ionic-angular';*/
import {FormBuilder, Validators} from '@angular/forms';

/**
 * Generated class for the RegisterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-form',
  templateUrl: 'register-form.html',
})
export class RegisterFormPage {
  user = {
    name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: ""
  };
  myForm;


  constructor(//public navCtrl: NavController,
    private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.compose(
        [
          Validators.required,
          Validators.pattern('[a-z A-Z]*'),
          Validators.maxLength(30)
        ]
      )],
      last_name: ['', Validators.compose(
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
          Validators.maxLength(30)
        ]
      )],
      phone: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ]
      )],
      email: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
          Validators.email
        ]
      )],
      username: ['', Validators.compose(
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern(/^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$/)
        ]
      )]
    });


  }

  onSubmit(data) {
    console.log(data);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterFormPage');
  }

  logForm() {
    console.log(this.user);
  }

}
