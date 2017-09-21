import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    
      
    @ViewChild('username') uname;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
    
    LogIn()  {
        if (this.uname.value == "manoj" && this.password.value == "kobi@24"){
            let alert = this.alertCtrl.create({
              title: 'LoggedIn successfully!',
              subTitle: 'Your were logged in successfully!',
              buttons: ['OK']
            });
            alert.present();
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
