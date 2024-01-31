export default class LikeModel {

    constructor(id, userId, postId) {
        this.id = id
        this.userId = userId
        this.postId = postId
    }

    //method for get all likes by postId from the database
    static get(postId) {
        const likeData = likes.filter( (l) => l.postId == postId)
        return likeData
    }

    //add new like
    static add(userId, postId) {
        const newComment = new LikeModel(likes.length + 1, userId, postId)
        likes.push(newComment)
        return newComment
    }

    //remove exists likes
    static remove(userId, postId) {
        const index = likes.findIndex( (l) => l.userId == userId && l.postId == postId)
        if(index == -1) {
            return null;
        } else {
            const likeData = likes[index]
            likes.splice(index, 1)
            return likeData
        } 
    }

    static getLike(userId, postId) {
        const likeData = likes.find( l => l.userId == userId && l.postId == postId)
        return likeData
    }

}

//Default model for like
var likes = [
    new LikeModel(1, 1, 1),
    new LikeModel(2, 2, 2),
    new LikeModel(3, 2, 1),
]

