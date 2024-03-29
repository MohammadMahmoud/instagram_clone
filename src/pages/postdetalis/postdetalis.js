"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PostDetalis = (function () {
    function PostDetalis(navCtrl, navParams, _postservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._postservice = _postservice;
        this.pageid = navParams.get('id');
        this.post = _postservice.getPosts().filter(function (posts) { return _this.pageid == _this.pageid; })[this.pageid - 1];
        console.log(this.pageid);
        console.log(this.post);
        this.comments = this.post.postComment;
    }
    PostDetalis = __decorate([
        core_1.Component({
            selector: 'post-detalis',
            templateUrl: 'postdetalis.html'
        })
    ], PostDetalis);
    return PostDetalis;
}());
exports.PostDetalis = PostDetalis;
