"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var posts_1 = require('../pages/posts/posts');
var postdetalis_1 = require('../pages/postdetalis/postdetalis');
var posts_service_1 = require('../providers/posts-service');
var posting_1 = require('../pages/posting/posting');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                posts_1.Posts,
                postdetalis_1.PostDetalis,
                posting_1.PostingPage
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                posts_1.Posts,
                postdetalis_1.PostDetalis,
                posting_1.PostingPage
            ],
            providers: [
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                [posts_service_1.PostsService]
            ],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
