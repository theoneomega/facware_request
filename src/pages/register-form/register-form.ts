import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {HomePage} from "../home/home";

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
  myForm;
  validation_messages = {
    'username': [
      {type: 'required', message: 'El nombre de usuario es requerido.'},
      {type: 'minlength', message: 'El nombre de usuario debe contener mas de 5 letras.'},
      {type: 'maxlength', message: 'El nombre de usuario no debe contener mas de 15 letras.'},
      {type: 'pattern', message: 'El nombre de usuario solo debe contener letras, numeros y "-" o "_".'}
    ],
    'name': [
      {type: 'required', message: 'El nombre es requerido.'},
      {type: 'pattern', message: 'El nombre solo puede contener letras.'}
    ],
    'email': [
      {type: 'required', message: 'El correo es requerido.'},
      {type: 'email', message: 'El correo debe de ser valido.'}
    ],
    'last_name': [
      {type: 'required', message: 'El apellido es requerido.'},
      {type: 'pattern', message: 'El apellido solo debe contener letras.'}
    ],
    'phone': [
      {type: 'required', message: 'El telefono es requerido.'},
      {type: 'pattern', message: 'El telefono solo debe contener numeros.'},
      {type: 'maxlength', message: 'El telefono debe de tener 10 digitos.'},
      {type: 'minlength', message: 'El telefono debe de tener 10 digitos.'}
    ],
    'password': [
      {type: 'required', message: 'La contraseña es requerida.'},
      {type: 'minlength', message: 'La contraseña debe ser mayor a 6 caracteres.'}
    ],
    'password_confirmation': [
      {type: 'required', message: 'La confirmacion de contraseña es requerida.'},
      {type: 'passwordMatch', message: 'La confirmacion de contraseña debe coincidir con la contraseña.'}
    ],
  };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
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
      )],
      password: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6)
        ]
      )],
      password_confirmation: ['', Validators.compose(
        [
          Validators.required,
          passwordValidator.passwordMatch('password')
        ]
      )]
    });
  }

  onSubmit(data) {
    console.log(data);
    localStorage.setItem('user',JSON.stringify(data));
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterFormPage');
  }
}

export class passwordValidator {
  static passwordMatch(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if (!isValid)
        return {'equalTo': {isValid}};
      else
        return null;
    };
  }
}
