"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/*
 Generated class for the PostsService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getPosts = function () {
        return [{
                postID: 1,
                ownerImg: "assets/img/photo.jpg",
                ownerName: "Mohammad Ashraf",
                postTime: "18 hrs",
                postImg: "assets/img/post.jpg",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 5,
                postComments: 10,
                postComment: [
                    { ownerImg: "assets/img/photo.jpg", ownerName: "Mohammad Ashraf", commentTime: "07:14 P.M", comment: "Amazing Picture", likes: "2" },
                    { ownerImg: "assets/img/photo2.jpg", ownerName: "Karim Mesallam", commentTime: "08:14 P.M", comment: "Nice Picture", likes: "3" },
                ],
            }, {
                postID: 2,
                ownerImg: "assets/img/photo2.jpg",
                ownerName: "Karim Mesallam",
                postTime: "24 hrs",
                postImg: "assets/img/post-2.jpg",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 12,
                postComments: 2,
                postComment: [
                    { ownerImg: "assets/img/photo.jpg", ownerName: "Mohammad Ashraf", commentTime: "07:14 P.M", comment: "Amazing Picture", likes: "2" },
                ],
            }, {
                postID: 3,
                ownerImg: "assets/img/photo.jpg",
                ownerName: "Mohammad Ashraf",
                postTime: "1 Day",
                postImg: "assets/img/post-3.jpg",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 2,
                postComments: 2,
                postComment: [
                    { ownerImg: "assets/img/photo.jpg", ownerName: "Mohammad Ashraf", commentTime: "07:14 P.M", comment: "Amazing Picture", likes: "2" },
                    { ownerImg: "assets/img/photo.jpg", ownerName: "Mohammad Ashraf", commentTime: "07:14 P.M", comment: "@Karim Thank You", likes: "2" }
                ],
            }, {
                postID: 4,
                ownerImg: "assets/img/photo2.jpg",
                ownerName: "Karim Mesallam",
                postTime: "2 Day",
                postImg: "assets/img/post-4.png",
                postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                postLikes: 4,
                postComments: 2,
                postComment: [
                    { ownerImg: "assets/img/photo.jpg", ownerName: "Mohammad Ashraf", commentTime: "07:14 P.M", comment: "Love Adele", likes: "2" },
                    { ownerImg: "assets/img/photo2.jpg", ownerName: "Karim Mesallam", commentTime: "08:14 P.M", comment: "Me Too", likes: "3" },
                ],
            }];
    };
    PostsService = __decorate([
        core_1.Injectable()
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
