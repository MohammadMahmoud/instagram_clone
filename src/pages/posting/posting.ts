import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Posts} from '../posts/posts'
import {AlertController} from 'ionic-angular';
/*
 Generated class for the Posting page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-posting',
    templateUrl: 'posting.html'
})
export class PostingPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    }

    post;
    file;
//when click posting we promte the array and nav back to main page
    posting() {
        let alert = this.alertCtrl.create({
            title: 'Posted',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop(Posts);
    }


}
