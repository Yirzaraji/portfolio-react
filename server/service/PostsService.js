const db = require("../models");

class PostsService {
  //Find all Posts
  static readAllPosts() {
    return db.Posts.findAll();
  }
  //read a post
  static readPost(id) {
    return db.Posts.findOne({ where: { id } });
  }
  //Create a post
  static createPost(postBody) {
    return db.Posts.create(postBody);
  }
  //Delete a post
  static deletePost(id) {
    return db.Posts.destroy({ where: { id } });
  }
}

module.exports = PostsService;
