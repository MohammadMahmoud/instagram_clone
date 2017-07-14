"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var posts_1 = require('../posts/posts');
/*
 Generated class for the Posting page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var PostingPage = (function () {
    function PostingPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    PostingPage.prototype.posting = function () {
        var alert = this.alertCtrl.create({
            title: 'Posted',
            buttons: ['OK']
        });
        alert.present();
        console.log("your post ", this.post);
        console.log("your img", this.file);
        this.navCtrl.pop(posts_1.Posts);
    };
    PostingPage = __decorate([
        core_1.Component({
            selector: 'page-posting',
            templateUrl: 'posting.html'
        })
    ], PostingPage);
    return PostingPage;
}());
exports.PostingPage = PostingPage;
