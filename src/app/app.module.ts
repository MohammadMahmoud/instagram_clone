import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Posts} from '../pages/posts/posts';
import {PostDetalis} from '../pages/postdetalis/postdetalis';
import {PostsService} from '../providers/posts-service';
import {PostingPage} from '../pages/posting/posting';

@NgModule({
    declarations: [
        MyApp,
        Posts,
        PostDetalis,
        PostingPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Posts,
        PostDetalis,
        PostingPage
    ],
    providers:[

        {provide: ErrorHandler , useClass: IonicErrorHandler},
        [PostsService] //service that gets our array
    ],

})
export class AppModule {
}
