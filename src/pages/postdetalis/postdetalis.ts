import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PostsService} from '../../providers/posts-service'

@Component({
    selector: 'post-detalis',
    templateUrl: 'postdetalis.html'
})
export class PostDetalis {



    constructor(public navCtrl: NavController, public navParams: NavParams , private _postservice:PostsService) {


        //we got array from services called POSTS array and paramters from NavPrams
        //this page takse id of that array and display it

        this.pageid = navParams.get('id'); //id of array from NavPartams
        this.post =  _postservice.getPosts().filter(posts => this.pageid == this.pageid)[this.pageid - 1]; //fliter this id from the main array
        console.log(this.pageid); // for testing
        console.log(this.post); // for testing
        this.comments = this.post.postComment; //split array of comments
    }
    ///varibles for post
    pageid;
    post;
    postID;
    comments;

}

