import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Posts } from '../pages/posts/posts';

@Component({

  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Posts;

  pages: Array<{icon: any , title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'home', title: 'Home', component: Posts },
      { icon:'contact', title: 'Profile', component: Posts },
      { icon:'ios-list-box', title: 'Post', component: Posts },
      { icon:'at', title: 'Notification', component: Posts },
      { icon:'log-out', title: 'Logout', component: Posts },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
