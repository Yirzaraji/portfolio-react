const express = require("express");
const app = express();
//const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/postController");

//reads
app.get("/posts", getPosts);

//read
app.get("/post/:id", getPost);

//create
app.post("/post/create", createPost);

//delete
app.delete("/post/delete/:id", deletePost);

//patch
app.patch("/post/update/:id", updatePost);

module.exports = app;
