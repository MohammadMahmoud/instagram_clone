"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var postdetalis_1 = require("../postdetalis/postdetalis");
var posting_1 = require("../posting/posting");
var Posts = (function () {
    function Posts(navCtrl, actionSheetCtrl, alertcontroller, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertcontroller = alertcontroller;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.posts = [{
                postID: 1,
                ownerImg: "assets/img/photo.jpg",
                ownerName: "Mohammad Ashraf",
                postTime: "18 hrs",
                postImg: "assets/img/post.jpg",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 5,
                postComments: 10,
            }, {
                postID: 2,
                ownerImg: "assets/img/photo2.jpg",
                ownerName: "Karim Mesallam",
                postTime: "24 hrs",
                postImg: "assets/img/post-2.jpg",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 12,
                postComments: 2
            }, {
                postID: 3,
                ownerImg: "assets/img/photo.jpg",
                ownerName: "Mohammad Ashraf",
                postTime: "1 Day",
                postImg: "assets/img/post-3.jpg",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 2,
                postComments: 2
            }, {
                postID: 4,
                ownerImg: "assets/img/photo2.jpg",
                ownerName: "Karim Mesallam",
                postTime: "2 Day",
                postImg: "assets/img/post-4.png",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 4,
                postComments: 2
            }];
    }
    Posts.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: function () {
                        _this.deleteAlert();
                    }
                }, {
                    text: 'Edit',
                    handler: function () {
                        _this.editAlert();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Posts.prototype.deleteAlert = function () {
        var alert = this.alertcontroller.create({
            title: 'Post Delete',
            subTitle: 'Are you sure about deleting this post?',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: function () {
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    Posts.prototype.editAlert = function () {
        var alert = this.alertcontroller.create({
            title: 'Post Delete',
            subTitle: 'Are you sure about deleting this post?',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: function () {
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    Posts.prototype.postdetalis = function (postID) {
        this.navCtrl.push(postdetalis_1.PostDetalis, {
            id: postID
        });
    };
    Posts.prototype.posting = function () {
        this.navCtrl.push(posting_1.PostingPage);
    };
    Posts.prototype.like = function (postLikes) {
        postLikes + 1;
        this.isRed = !this.isRed;
    };
    Posts = __decorate([
        core_1.Component({
            selector: 'page-posts',
            templateUrl: 'posts.html'
        })
    ], Posts);
    return Posts;
}());
exports.Posts = Posts;
