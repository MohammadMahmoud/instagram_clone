//interface for services


export interface IPosts {
    postID: number;
    ownerImg: string;
    ownerName: string;
    postTime: string;
    postImg: string;
    postCaption: string;
    postLikes: number;
    postComments: number;
    postComment: any[];
}
