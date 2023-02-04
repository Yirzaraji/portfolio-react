const db = require("../models");

class PostsService {
  //Find all Product
  static readAllPosts() {
    return db.Posts.findAll();
  }
  //read a product
  static readPost(id) {
    return db.Posts.findOne({ where: { id } });
  }
  //Create a product
  static createPost(postBody) {
    return db.Posts.create(postBody);
  }
}

module.exports = PostsService;
