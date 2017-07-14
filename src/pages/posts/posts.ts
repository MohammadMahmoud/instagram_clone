import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {App, ViewController} from 'ionic-angular';
import {PostDetalis} from "../postdetalis/postdetalis";
import {PostingPage} from "../posting/posting"


///interface of posts
export interface IPosts {
    postID: number;
    ownerImg: string;
    ownerName: string;
    postTime: string;
    postImg: string;
    postCaption: string;
    postLikes: number;
    postComments: number;
}


@Component({
    selector: 'page-posts',
    templateUrl: 'posts.html'
})

export class Posts {

    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public alertcontroller: AlertController,
                public viewCtrl: ViewController, public appCtrl: App) {


    }

//in this time i use the interface instead of service
    posts: IPosts[] = [{
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
//action button function
    presentActionSheet() {


        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your post',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: () => {
                        this.deleteAlert();
                    }
                }, {
                    text: 'Edit',
                    handler: () => {
                        this.editAlert();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        actionSheet.present();
    }

//deleteAlert button function
    deleteAlert() {
        let alert = this.alertcontroller.create({
            title: 'Post Delete',
            subTitle: 'Are you sure about deleting this post?',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: () => {
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        alert.present();
    }

//editAlert button function
    editAlert() {
        let alert = this.alertcontroller.create({
            title: 'Post Delete',
            subTitle: 'Are you sure about deleting this post?',
            buttons: [
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: () => {
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ]
        });
        alert.present();
    }

//post detalis function
    postdetalis(postID) {

        this.navCtrl.push(PostDetalis, {
            id: postID
        })
        ;
    }

//posting button function
    posting() {
        this.navCtrl.push(PostingPage);
    }

    isRed;
//likes funtion
    like(postLikes) {
        postLikes + 1;
        this.isRed = !this.isRed;
    }

}
