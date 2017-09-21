import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    
     @ViewChild('username') uname;
    @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
    
    registerUser() {
        console.log(this.uname.value, this.password.value)
//        if (this.uname.value == "" || this.password.value == "") { 
            let alert = this.alertCtrl.create({
              title: 'Registred successfully!',
              subTitle: 'Your were successfully registred with us',
              buttons: ['OK']
            });
            
            alert.present();
//        }
    }

}
