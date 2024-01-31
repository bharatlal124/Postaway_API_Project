export default class PostModel {
  constructor(id, userId, caption, imageUrl, timestamp) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.timestamp = timestamp;
  }

  //add posts
  static add(userId, caption, imageUrl, timestamp) {
    const newPost = new PostModel(
      posts.length + 1,
      userId,
      caption,
      imageUrl,
      timestamp
    );
    posts.push(newPost);
    return newPost;
  }

  //get all posts
  static getAll() {
    return posts;
  }

  //get post by it's id
  static getById(id) {
    const post = posts.find((p) => p.id == id);
    return post;
  }

  static getByUser(userId) {
    const post = posts.find((p) => p.userId == userId);
    return post;
  }

  static getPostByUserId(postId, userId) {
    const post = posts.find((p) => p.userId == userId && p.id == postId);
    return post;
  }

  //delete the posts by it's postId
  static delete(postId, userId) {
    const postIndex = posts.findIndex(
      (p) => p.id == postId && p.userId == userId
    );
    if (postIndex == -1) {
      return null;
    } else {
      const postData = posts[postIndex];
      posts.splice(postIndex, 1);
      return postData;
    }
  }

  //update the post
  static update(postObj) {
    const index = posts.findIndex(
      (p) => p.id == postObj.id && p.userId == postObj.userId
    );
    if (index == -1) {
      return null;
    } else {
      posts[index] = postObj;
      return posts[index];
    }
  }
}

//Default data for testing purposes
var posts = [
  new PostModel(
    1,
    1,
    "Summary of the book Atomic habits",
    "https://5.imimg.com/data5/SELLER/Default/2022/10/GB/ES/KH/162021231/atomic-habits-business-book.jpg",
    "30 Jan 2024 10:20 AM"
  ),
  new PostModel(
    2,
    2,
    "Impact of AI on healthcare",
    "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/og-ai-in-healthcare.png",
    "30 Jan 2024 10:24 AM"
  ),
];
