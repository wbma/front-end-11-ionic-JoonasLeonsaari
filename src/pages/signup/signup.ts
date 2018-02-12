import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MediaProvider} from '../../providers/media/media';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: User = {
    username: '',
    password: '',
    email: '',
  };

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register() {
    console.log(this.user);

    this.mediaProvider.register(this.user).
      subscribe(response => {
        console.log(response);
        this.mediaProvider.username = this.user.username;
        this.mediaProvider.password = this.user.password;
      }, (error: HttpErrorResponse) => {
        console.log(error.error.message);
      });
  }

}
