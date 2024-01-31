export default class CommentModel {
  constructor(id, userId, postId, content, timestamp) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.content = content;
    this.timestamp = timestamp;
  }

  //method to get thecomments
  static get(postId) {
    const data = comments.filter((c) => c.postId == postId);
    return data;
  }

  //Add the comments
  static add(userId, postId, content, timeStamp) {
    // validate post id before saving, check if it exists
    const newComment = new CommentModel(
      comments.length + 1,
      userId,
      postId,
      content,
      timeStamp
    );
    comments.push(newComment);
    console.log(newComment);
    return newComment;
  }

  //Delete the comments
  static delete(commentId, userId) {
    const commentIndex = comments.findIndex(
      (c) => c.id == commentId && c.userId == userId
    );
    if (commentIndex == -1) {
      return null;
    } else {
      const commentData = comments[commentIndex];
      comments.splice(commentIndex, 1);
      return commentData;
    }
  }

  //Update the comments
  static update(commentId, userId, content, timeStamp) {
    const index = comments.findIndex(
      (c) => c.id == commentId && c.userId == userId
    );
    if (index == -1) {
      return null;
    } else {
      comments[index].content = content;
      comments[index].timestamp = timeStamp;
      return comments[index];
    }
  }

  //Get the comments details by userId
  static getCommentByUser(commentId, userId) {
    const comment = comments.find(
      (c) => c.id == commentId && c.userId == userId
    );
    return comment;
  }
}

//Default model of comments
var comments = [
  new CommentModel(1, 1, 1, "Superb content", "30 Jan 2024 12:41 PM"),
  new CommentModel(2, 2, 1, "Helpfull post", "30 Jan 2024 12:45 PM"),
  new CommentModel(3, 1, 2, "This is demo comment", "31 Jan 2024 10:11 AM"),
];
